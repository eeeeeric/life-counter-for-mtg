import firebase from '@/firebase';
/**
 * Create a new room with the given player.
 *
 * @param player The name of the player creating the room
 */
export function createRoom(player: string): string {
    const docRef = firebase.firestore().collection('Rooms').doc();
    docRef.set({
        players: [player],
    });
    const playerRef = firebase.firestore().doc(`Rooms/${docRef.id}/Players/${player}`)
        .set({
            life: 40,
        });
    return docRef.id;
}

export function joinRoom(player: string, room: string) {
    const docRef = firebase.firestore().doc('Rooms/${room}');
    docRef.set({
        players: firebase.firestore.FieldValue.arrayUnion(player),
    });
    const playerRef = firebase.firestore().doc(`Rooms/${room}/Players/${player}`)
        .set({
            life: 40,
        });
}

export function listenToRoom(room: string, callback: (snapshot: firebase.firestore.QuerySnapshot) => void): void {
    firebase.firestore().collection(`Rooms/${room}/Players`)
        .onSnapshot((querySnapshot) => {
            callback(querySnapshot);
        });
}

export function setLife(room: string, player: string, life: number): Promise<void> {
    return firebase.firestore().doc(`Rooms/${room}/Players/${player}`).set({
        life,
    });
}
