---
slug: ppg-timer
title: PPG Timer, l'app qu'il te faut pour brûler des caloris en confinement
tags: [sport, side-project]
description: Pour nos séances de sport nous utilisions souvent une application pour gérer les timers. Mais ça ne correspondait pas vraiment à nos besoins. Du coup, comme d'hab on a réinventé la roue mais en mieux ^^
date: 22/03/2021
---

# PPG Quoi ?

Si tu ne connais pas la PPG, voici une définition qui te permettra de tout savoir sur cette sainte activité.

>La PPG, ou préparation physique généralisée, est un panel d'exercices qui permettent de renforcer l'ensemble du système musculaire, tendineux et articulaire du sportif (haut et bas du corps).

>L'objectif principal est de prévenir le risque de blessure en proposant des exercices généraux qui participent au renforcement global ainsi qu'à l'équilibre du corps.

Bon, ce n'est pas de moi, donc merci @lequipe :joy:

Bref, depuis qu'on a plus le droit d'aller transpirer où on veut et quand on veut, on se retrouve entre copains / famille pour se dépenser en visio tous ensemble. Et même que c'est vachement sympa ^^ On a pu trouver des [fiches rapides](https://idftriathlon.com/covid-19/sport-en-confinement/seances-confinement-crosslift/) pour les premières séances où on avait pas beaucoup d'imagination. Depuis ça va mieux, on est devenu de véritables tortionnaires :smiling_imp:

![intervaltimer.com](/blog_images/ppg-timer/seance_ppg.png)

Mais avoir les exercices et le plan de séance c'est bien mais pouvoir l'executer au petits oignons, c'est mieux. Pour les séances assez simple, on se notait la liste des exercices et on mettait un timer trouvé sur le net. Le site est plutôt simple mais ça suffit pour ce qu'on faisait. Ca se nomme [intervaltimer.com](https://www.intervaltimer.com/create/hiit-timer).

![intervaltimer.com](/blog_images/ppg-timer/hiit_timer.png)

## "Si c'est si bien que ça, pourquoi tu as encore développé une application ?"

On avait notre routine, mais sans réelement sans rendre compte, on se bridait un peu pour que notre séance de sport convienne au timer. En réalité, intervaltimer.com permet de définir un entrainement grâce à :
- d'executer un cycle X fois 
- une durée d'échauffement
- une durée de récupération à chaque fin du cycle
- le nombre d'exercices dans le cycle
- un temps d'effort unique pour tous les exercices
- un temps de récup unique après tous les exercices

C'est bien mais c'est limitant, par exemple on ne peut pas : 
- faire les exrecices selon des temps d'efforts ou de récupération différents 
- faire un exercice par nombre de répétitions, plutôt que par temps d'effort
- avoir le nom de l'exercice en cours
- avoir le nom du prochain exercice pour se préparer (debout, sol, accessoire)

Développer notre propre application permettrait de combler tous cela et pourquoi pas aller plus loin vu qu'on aura la main dessus après ^^

## "Bon ok ce serait sympa mais c'est long et compliqué à faire tout ça..."

Si seulement c'était mon métier ... Bon ok, je ne pense pas que tout le monde se pose ce genre de question mais quand tu sais créer une application et qu'en plus ça te permet d'apprendre ou de mettre à jour tes compétences, tu n'hésites pas une seule seconde.

Pour créer une application pc il y a plusieurs solutions. Moi je suis développeur Web et il se trouve que pour créer ce genre d'application il y a truc magique qui s'appelle [Electron](https://www.electronjs.org). Magique, magique, faut le dire vite. Ce n'est qu'un navigateur chromium-like qui encapsule ton application web et te permet d'avoir accès à certaines fonctionnalités de la machine comme le stockage sur le disque ou l'utilisation de librairies NodeJS non utilisables directement dans un navigateur.

Ici tu dois te dire, "ok, le mec va utiliser un super gadget. Mais qui a dit qu'il fallait que ce soit utilisable sur un pc ?"
Oui ok, ce n'est d'une pas très utile et en plus moins bien que si l'appli était accèssible par le web. Je pourrais répondre que ça permet d'utiliser l'application sans avoir accès à internet, mais maintenant on a les PWA quand même. Donc ce qu'il faut savoir c'est que je voulais me mettre à jour sur ElectronJS et que ... ben c'est tout en fait ^^

## "Mais de quoi tu nous parles ?"

Il est vrai que je n'ai peut être pas un publique 100% tourné vers le développement et tu es peut être juste un sportif en quête de la dernière appli à la mode. Je vais donc donner directement le lien vers l'application et tu pourras te faire une idée de ce que ça donne.

Voici la liste des dernières versions de l'application. Je te conseille la dernière et de revenir de temps en temps vérifier qu'il n'y a pas une nouvelle version ^^

[Installer ppg-timer](https://github.com/ThomasLaforge/ppg-timer/releases)

Actuellement, l'app permet de :
- créer des entrainements avec plusieurs cycles
- créer des cycles d'exercices avec des durées et récupérations différentes
- répéter chaque cycles autant de fois qu'on le veut
- nommer la séance
- sauvegarder la séance
- la partager via un code unique
- éxecuter une séance
- mettre en pause / redémarrer la séance
- sauter un exercice ou le recommencer
- avoir des informations sur l'exercice en cours (photos / description)
- connaître le temps passé et restant de la séance
- connaître les prochains exercices

## "Moi ça m'interessait ton charabia de geek !"

Ok alors si tu es encore là, je te conseille d'aller voir le projet sur Github [par ici](https://github.com/ThomasLaforge/ppg-timer)
J'ai fait un readme plutôt simple mais je le mettrai à jour au fur et à mesure de l'avancé du projet.

Pour faire simple, c'est du ReactJS où je me suis forcé à utliser les functionnal components avec les Hooks, tout ça tout ça. 
Tu commences à me connaître, oui c'est du Typescript avec du Scss. 
J'ai essayé quelques nouveaux paquets npm comme dayjs à la place de moment, pas de mobx mais du simple React Context, et Firebase.

J'ai passé un bon moment sur le projet, il me reste à prendre les photos de madame pour imager les différents exercices, leur ajouter une description et peut être créer un modules d'ajouts/ modification / suppression des exercices.

## Bilan

J'ai passé un bon moment sur le projet, j'ai consolidé mes connaissances et j'ai fait une application fonctionnelle, pratique et qui correspond à nos besoins. Si l'application est utile pour toi, laisse moi un petit commentaire, ça fait toujours plaisir. Je continuerai à partager mes projets sur le blog donc reviens de temps en temps.