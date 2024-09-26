// i18n.js
const i18n = i18next.createInstance();

i18n.init({
    lng: 'fr',
    resources: {
        en: {
            translation: {
                "title-home": "Web developer, French student",
                "name": "Maxime Gilbert",
                "portfolio-title": "Welcome to my Portfolio",
                "portfolio-instructions": "Click on the image to be redirected to the site",
                "skill-title": "All the languages that I use",
                "about-me-title": "Here is all my contact information.",
                "about-me-text": "My name is Maxime. I am 30 years old, I’m from Nantes, France. I have always been passionate about the web industry, so i undertook a three-year training in Web Design. During this training, I realized that Web Developement was a dear path for me. That’s why i decided to pursue a bachlor’s +4 degree in Web Developement and Mobile Web.",
                "mail": "Mail: gilbert.maxime01@gmail.com",
                "skill-html": "Today, I can consider myself to be at an advanced level in HTML. The majority of the experience I have gained is thanks to my web design school, where I was able to learn this language. During my time at ENI, I further refined my skills in this language.",
                "skill-css": "My journey with CSS is similar to HTML, as at the beginning of my programming and web design studies, I dedicated myself entirely to learning these two skills. Today, my CSS level is advanced.",
                "skill-js": "The majority of my experience with JavaScript took place during my courses at ENI École Informatique. By completing several projects at this school, I was able to learn and refine my skills in this language.",
                "skill-react": "After feeling the need for efficiency in web application development and the development of high-performance applications, I began self-training through documentation. Today, I am still in this phase.",
                "skill-angular": "Thanks to my studies in web development, I had the opportunity to train on these frameworks. I am still in the learning phase.",
                "skill-ps": "During my training in Web Design, I worked with the Photoshop environment, learning the basics and improving my skills. I have been working with this environment for several years. I can consider myself to be at an advanced level in Photoshop.",
                "skill-ai": "My knowledge of Illustrator is similar to Photoshop; it is an environment that I particularly enjoy for vector graphics. I have been working with this environment for several years. I can consider myself to be at an advanced level in Illustrator.",
                "skill-figma": "I am currently training on Figma to improve my design and prototyping skills. This powerful tool allows me to create intuitive and interactive user interfaces. I particularly appreciate the ease with which I can collaborate in real-time with other designers."
            }
        },
        fr: {
            translation: {
                "title-home": "Développeur web, étudiant français",
                "name": "Maxime Gilbert",
                "portfolio-title": "Bienvenue dans mon Portfolio",
                "portfolio-instructions": "Cliquez sur l'image pour être redirigé vers le site",
                "skill-title": "Toutes les langues que j'utilise",
                "about-me-title": "Voici toutes mes informations de contact.",
                "about-me-text": "Je m'appelle Maxime. J'ai 30 ans, je viens de Nantes, France. J'ai toujours été passionné par l'industrie du web, donc j'ai entrepris une formation de trois ans en Web Design. Pendant cette formation, j'ai réalisé que le développement web était une voie chère pour moi. C'est pourquoi j'ai décidé de poursuivre une licence +4 en développement web et mobile.",
                "mail": "Mail: gilbert.maxime01@gmail.com",
                "skill-html": "Aujourd'hui, je peux me considérer comme étant à un niveau avancé en HTML. La majorité de l'expérience que j'ai acquise est due à mon école de design web, où j'ai pu apprendre ce langage. Pendant mon temps à l'ENI, j'ai encore affiné mes compétences dans ce langage.",
                "skill-css": "Mon parcours avec CSS est similaire à celui avec HTML, car au début de mes études en programmation et en design web, je me suis entièrement consacré à l'apprentissage de ces deux compétences. Aujourd'hui, mon niveau en CSS est avancé.",
                "skill-js": "La majorité de mon expérience avec JavaScript a eu lieu pendant mes cours à l'ENI École Informatique. En réalisant plusieurs projets dans cette école, j'ai pu apprendre et affiner mes compétences dans ce langage.",
                "skill-react": "Après avoir ressenti le besoin d'efficacité dans le développement d'applications web et le développement d'applications hautes performances, j'ai commencé à m'autoformer grâce à la documentation. Aujourd'hui, je suis encore dans cette phase.",
                "skill-angular": "Grâce à mes études en développement web, j'ai eu l'opportunité de me former sur ces frameworks. Je suis encore en phase d'apprentissage.",
                "skill-ps": "Pendant ma formation en Web Design, j'ai travaillé avec l'environnement Photoshop, apprenant les bases et améliorant mes compétences. Je travaille avec cet environnement depuis plusieurs années. Je peux me considérer comme étant à un niveau avancé en Photoshop.",
                "skill-ai": "Ma connaissance d'Illustrator est similaire à celle de Photoshop ; c'est un environnement que j'apprécie particulièrement pour les graphiques vectoriels. Je travaille avec cet environnement depuis plusieurs années. Je peux me considérer comme étant à un niveau avancé en Illustrator.",
                "skill-figma": "Je suis actuellement en formation sur Figma pour améliorer mes compétences en design et en prototypage. Cet outil puissant me permet de créer des interfaces utilisateur intuitives et interactives. J'apprécie particulièrement la facilité avec laquelle je peux collaborer en temps réel avec d'autres designers."
            }
        }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
        escapeValue: false // React already does escaping
    }
});

function changeLanguage(lng) {
    i18n.changeLanguage(lng, (err, t) => {
        if (err) return console.log('something went wrong loading', err);
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = i18n.t(key);
        });
        document.querySelectorAll('[data-text]').forEach(element => {
            const key = element.getAttribute('data-text');
            element.setAttribute('data-text', i18n.t(key));
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    i18n.init().then(() => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.innerHTML = i18n.t(key);
        });
        document.querySelectorAll('[data-text]').forEach(element => {
            const key = element.getAttribute('data-text');
            element.setAttribute('data-text', i18n.t(key));
        });
    });
});
