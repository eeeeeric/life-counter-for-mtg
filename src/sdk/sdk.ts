import firebase from '@/firebase';
/**
 * Create a new room with the given player.
 *
 * @param player The name of the player creating the room
 */
export async function createRoom(player: string): Promise<string> {
    const docRef = firebase.firestore().collection('Rooms').doc();
    const createRoomPromise = docRef.set({
        players: [player],
    });
    const createPlayerDoc = firebase.firestore().doc(`Rooms/${docRef.id}/Players/${player}`)
        .set({
            life: 40,
        });
    await Promise.all([createRoomPromise, createPlayerDoc]);
    return docRef.id;
}

export async function joinRoom(player: string, room: string): Promise<void> {
    const docRef = firebase.firestore().doc(`Rooms/${room}`);
    const updateRoom = docRef.update({
        players: firebase.firestore.FieldValue.arrayUnion(player),
    });
    const createPlayerDoc = firebase.firestore().doc(`Rooms/${room}/Players/${player}`)
        .set({
            life: 40,
        });
    await Promise.all([updateRoom, createPlayerDoc]);
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
