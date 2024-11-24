const isUnique = async (model, key) => {
  const res = await model.findOne({
    where: { [key]: this[key] },
  });
  console.log('this.login_name:', this[key]);
  console.log('res', res);

  if (res) throw new Error('login_name value already exists');
};

const isFind = async (model, key, _key) => {
  const res = await model.findOne({ where: { [key]: this[_key] } });
  if (!res)
    throw new Error(
      _key + ' is incorrect and cannot be found from table'
    );
};

module.exports = {
  isUnique,
  isFind,
};
