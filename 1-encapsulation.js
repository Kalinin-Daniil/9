// BEGIN
export function getMutualFriends(user1, user2) {
  const user1Friends = user1.getFriends();
  const user2Friends = user2.getFriends();

  const mutualFriends = user1Friends.reduce((mutual, friend1) => {
    if (user2Friends.some((friend2) => friend1.id === friend2.id)) {
      mutual.push(friend1);
    }
    return mutual;
  }, []);

  return mutualFriends;
}

// END

export default ({ id = null, friends = [] } = {}) => ({
  friends,
  id,
  getFriends() {
    return this.friends.slice(); // возвращение копии массива, чтобы его не изменили извне
  },
});