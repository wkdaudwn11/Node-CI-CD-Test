const userList = [
  { id: "1", name: "장명주A", engName: "JMJ" },
  { id: "2", name: "장명주B", engName: "JMJ" },
  { id: "3", name: "장명주C", engName: "JMJ" }
];

const getUsers = ctx => {
  ctx.body = userList;
};

const getUser = ctx => {
  const { id } = ctx.params;

  ctx.body = userList.filter(user => user.id === id);
};

module.exports = {
  getUsers,
  getUser
};
