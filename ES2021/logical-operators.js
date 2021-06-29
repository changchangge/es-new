// or Or equals

x ||= y
x || (x = y)

// and And equals

x &&= y
x && (x = y)

// nullish and equals

x ??= y
x ?? (x = y)

// example

const uodateUserName = user => user.name ||= 'son';

const setUser = user => {
  user.id ??= 1,
    user.name ??= 'son'
  return user;
}

setUser({ id: 1 })