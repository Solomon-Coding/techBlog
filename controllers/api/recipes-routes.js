const router = require('express').Router();
const Recipes = require('../../models/Recipes');
const Nodemailer = require("nodemailer");
require('dotenv').config();

// route to create/add a recipes using async/await
router.post('/', async (req, res) => {
  try { 
    const recipesData = await Recipes.create({
    name: req.body.name,
    author: req.body.author,
    instructions: req.body.instructions,
    ingredients: req.body.ingredients,
    category_id: req.body.category_id,
    style_id: req.body.style_id,
  });
  // if the recipes is successfully created, the new response will be returned as json
  res.status(200).json(recipesData)
} catch (err) {
  res.status(400).json(err);
}
});

router.post('/send', (req, res) => {
  try { 
    // let nodemailer;
    // if (process.env.JAWSDB_URL) {
    //   nodemailer = new Nodemailer(process.env.JAWSDB_URL);
    // } else {
    //   nodemailer = new Nodemailer(process.env.password)
    // }
    const transporter = Nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: 'solomonvana18@gmail.com',
        pass: 'llpmdshovixykehd',
      }
    });
  
    const mailOptions = {
      from: '"Homecooked" <homecooked@gmail.com>', // sender address
      to: `${req.body.recipient}`, // list of receivers
      subject: `${req.body.subject}`, // Subject line
      html: `${req.body.message}`, // html body
    };

    transporter.sendMail(mailOptions);
    console.log("Email sent")
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); 
  res.render("viewRecipe", {msg:'Email sent'});
    res.status(200).end()
} catch (err) {
  res.status(400).json(err);
}
});

router.put('/:id', async (req, res) => {
  try { 
    const recipesData = await Recipes.update(
      {
      name: req.body.name,
      author: req.body.author,
      instructions: req.body.instructions,
      ingredients: req.body.ingredients,
      category_id: req.body.category_id,
      style_id: req.body.style_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
    // if the recipes is successfully created, the new response will be returned as json
    res.status(200).json(recipesData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
