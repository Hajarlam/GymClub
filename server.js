const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route pour gérer l'envoi de l'e-mail depuis le formulaire
app.post('/send-email', (req, res) => {
    const { user_email } = req.body;

    // Créer un transporteur SMTP réutilisable en utilisant les informations de connexion
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'Hajarlamharzi@gmail.com',
            pass: 'Lamharziaa'
        }
    });

    // Options de l'e-mail
    let mailOptions = {
        from: 'Gym@gmail.com',
        to: 'Hajarlamharzi@example.com',
        subject: 'Nouveau message de contact',
        text: `Vous avez reçu un nouveau message de contact de ${user_email}`
    };

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
        } else {
            console.log('E-mail envoyé: ' + info.response);
            res.send('E-mail envoyé avec succès');
        }
    });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
