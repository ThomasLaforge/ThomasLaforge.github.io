---
slug: le-blog
title: Le blog
tags: [dev, nextjs, markdown]
description: Le blog est né de l'idée de mettre en ligne mes notes personnels et les connaissances que j'ai pu apprendre, pour les synthétiser et peut être un jour aider quelqu'un qui passerait par là. Il m'a aussi permis de réfléchir à l'architecture d'un blog, tout en testant la mise en place grâce à NextJs.
date: 02/08/2021
---

## Motivation

Le blog est né de l'idée de mettre en ligne mes notes personnels et les connaissances que j'ai pu apprendre, pour les synthétiser et peut être un jour aider quelqu'un qui passerait par là. Il m'a aussi permis de réfléchir à l'architecture d'un blog, tout en testant la mise en place grâce à NextJs.

J'ai toujours aimé écrire mais on a jamais aimé me lire ^^ Depuis tout petit, on me renvoie l'image de quelqu'un qui réfléchit vite mais qui ne sait pas s'exprimer. Je suis quelqu'un de très sociable et assez gentil donc on m'écoute mais il faut m'écouter un moment avant de vraiment me comprendre. Un genre de bon élève avec des 5 constants en français ^^
Aujourd'hui, je suis développeur Web. Mon travail se résume donc à écrire toute la journée pour qu'un ordinateur comprenne comment je veux qu'il travaille. Et je dois avouer qu'il me comprend plutôt bien lui. De là à imaginer que le problème vient des "gens" ... Non pas possible.

Si vous ne comprenez pas là où je veux en venir, c'est bien vous commencer à comprendre que le problème vient réelement de moi et qu'il vous faudra du courage pour comprendre tout ce que je veux vous partager sur le blog.

## Les choix techniques 

### Le Markdown

Au quotidien, je passe mon temps à écrire du code dans des langages plus ou moins différents. Ce code est compréhensible par des machines mais pour le commun des mortels ce n'est pas le moyen le plus sympa de communiquer. Alors quand je veux laisser des informations accessibles à mes semblables ou à mon moi du futur, j'écris en Markdown.

Qu'est ce que le [markdown](https://fr.wikipedia.org/wiki/Markdown) ?

Il s'agit d'un langage de balisage léger. C'est à dire qu'il ressemble beaucoup à de la prise de note manuscrite. On écrit du texte simple, qu'on agrémente de petits symboles très caractéristiques pour ajouter une information sémentique. 
Il peut s'agir :
- d'une liste d'informations
- un mot fort
- un tableau 
- un lien vers une information présenté ailleurs
- etc... 

Je mets ici quelques exemples :

```md
## Un titre important
### Un titre un peu moins important
1) Une liste 
2) avec deux éléments
```

---

Le résultat interprété par la machine :

# Un titre important
## Un titre un peu moins important
1) Une liste 
2) avec deux éléments

---

Le but serait donc de pouvoir récupérer une partie des différentes notes précédement écrites et de conserver ce format d'écriture qui me convient tout particulièrement.

### Blog = interpréteur de Markdown

Partant de ce constat là, le but du projet est de rendre visuel mes articles. 

Il ne doit pas gérer la partie écriture. Comme je l'ai expliqué auparavant le contenu de l'article est un fichier texte avec quelques règles d'écriture que je maitrise déjà. Certains outils existent pour améliorer l'expèrience d'écriture et n'ont donc pas de sens à être redéveloppés dans le blog.

### Autres solutions

Une solution équivalente aurait pu être développé avec [Gatsby JS](https://www.gatsbyjs.com). Il s'agit d'un équivalent de NextJs. A vrai dire, l'idée d'écrire un blog me trottait dans la tête depuis un moment et à une époque c'était la meilleur solution. Maintenant NextJs est connu pour permettre de faire beaucoup de chose, donc créer un blog et il était donc plus utile pour moi de me former ou du moins de tester NextJs plutôt que Gatsby.

Wordpress est souvent la meilleur solution quand on ne veut pas trop coder et créer rapidement du contenu web. Coder ne me fait pas peur et je n'ai pas vocation à réaliser ce genre de site professionelement donc j'ai préféré rester dans l'univers du dev JS.

### Graphisme

Intégration et fusion de deux thèmes de blog d'exemples. Je n'ai pas beaucoup de compétence en design, donc je préfère trouver des idées en navigant sur d'autres sites et récupérer les parties de design qui me plaisent. Je ne pique pas d'idées de solutions payantes.

### Hébergement

Utilisation du service intégré de Next (Vercel), qui permet de build le site complet à chaque nouveau push sur le repo github du projet.
L'hébergement est gratuit tant que le traffic reste faible. J'ai pu y ajouter mon nom de domaine facilement et tout à fonctionné du premier coup, le tout en moins de 5 minutes. Simple et efficace !

## Evolutions

Pour l'instant, le site permet de me présenter et de présenter mon travail. Il n'a pas pour but de me mettre en avant ou de trouver du travail. Le contenu du site sera maintenant entièrement consacré à la partie blog. Je vais essayer d'utiliser le maximum de meta data pour classer, regrouper et filtrer les articles qui pourraient vous intéresser. Le but et de conserver cette façon très naturelle et personnel de garder une trace de mes projets.