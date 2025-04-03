const {models} = require("../libs/sequelize")

const createImg = async (req, res) => {
  try {

    const { userId, img } = req.body;

    // Verificar si el usuario ya cargó la misma imagen
    const existingImg = await models.Img.findOne({
      where: { userId, img },
    });

    if (existingImg) {
      return res.status(400).json({
        success: false,
        message: "El usuario ya cargó esta imagen previamente.",
      });
    }

    const newImg = await models.Img.create(req.body);

    res.json({ success: true, data: newImg });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};


module.exports = {
    createImg
};