const {models} = require("../libs/sequelize")

const create = async (req, res) => {
  try {
    //faltaria enviar un email de confirmacion al usuario
    const newPerson = await models.Person.create(req.body);
    res.json({ success: true, data: newPerson });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const confirmEmail = async (req, res) => {
  try {

    const person = await models.Person.findByPk(req.body.id);

    person.confirmEmail = true;
    await person.save();

    res.json({ success: true, data: person });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


const getByEmail = async (req, res) => {
  try {
    const person = await models.Person.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!person) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, data: person });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



module.exports = {
  create,
  confirmEmail,
  getByEmail
};