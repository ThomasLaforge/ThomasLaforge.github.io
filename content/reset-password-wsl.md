---
slug: reset-password-wsl
title: Réinitialiser son mot de passe WSL
tags: [wsl, password, reset, mot de passe, dev]
description: Oubli du mot de passe WSL ? Avant de tout réinstaller, voici comment le réinitialiser. En trois étapes simples, vous pourrez de nouveau accéder à votre terminal WSL et faire des commandes avec sudo.
date: 17/04/2024
---

## Contexte

Certains de mes étudiants n'ont pas toujours les bonnes pratiques pour leurs mots de passe. Certains au contraire cherchent à sécuriser au maximum leurs machines. Dans tous les cas, il arrive que l'on oublie son mot de passe WSL. 

On va voir que dans le cadre d'un mot de passe WSL, il n'est pas intéressant de mettre le paquet sur la complexité de ce mot de passe. En effet, dans la suite de ce tuto, on va voir que n'importe qui ayant accès à votre machine peut réinitialiser votre mot de passe WSL. On privilégiera donc un mot de passe simple à retenir et on sécurisera notre machine avec un mot de passe de session Windows plus complexe.

## Prérequis

- Avoir un terminal WSL avec une distribution Ubuntu, Debian ou Kali
- Avoir un mot de passe WSL à réinitialiser
- Avoir au moins un oeil fonctionnel ou un lecteur d'écran
- Savoir copier-coller

## Étapes

### I. Récupérer les informations de votre distribution WSL

#### 1. Trouver votre nom d'utilisateur

Vous pouvez taper `wsl` dans la barre de recherche Windows pour ouvrir un terminal WSL. Si vous avez un raccourci sur votre bureau, vous pouvez aussi l'utiliser.

Le nom d'utilisateur est le nom que vous avez choisi lors de l'installation de votre distribution WSL. Pour le retrouver, vous pouvez taper la commande suivante :

```bash
whoami
```

Sinon, c'est simplement le nom que vous apercevez avant le @ dans votre terminal WSL.  

Exemple :   
```bash
votre-nom-dutilisateur@DESKTOP-XXXXXXX:~$
```
Ici : `votre-nom-dutilisateur`

#### 2. Trouver la distribution Linux utilisée

On peut arrêter le terminal WSL en tapant la commande `exit` ou en fermant la fenêtre.
Et on va maintenant passer sur le terminal Windows `cmd`.

Tapez `cmd` dans la barre de recherche Windows pour ouvrir un terminal Windows.

Il va falloir noter le nom de votre distribution WSL.  
Pour cela, vous pouvez taper la commande suivante :

```bash
wsl --list --verbose
```

### II. Changer l'utilisateur par défaut de votre distribution WSL

Ensuite, en fonction de votre distribution, vous allez taper une des commandes suivantes :

| Distribution  | Commande à taper                        |
| ------------- | --------------------------------------- |
| Ubuntu        | `ubuntu config --default-user root`     |
| Ubuntu 22.04  | `ubuntu2204 config --default-user root` |
| Ubuntu 20.04  | `ubuntu2004 config --default-user root` |
| Ubuntu 18.04  | `ubuntu1804 config --default-user root` |
| Debian        | `debian config --default-user root`     |
| Kali Linux    | `kali config --default-user root`       |

Cette commande va permettre de changer l'utilisateur par défaut de votre distribution WSL. On va passer en root pour pouvoir changer le mot de passe de l'utilisateur. Et nous reviendrons changer l'utilisateur plus tard.

### III. Changer le mot de passe de l'utilisateur

Toujours dans le terminal Windows `cmd`, vous allez taper la commande suivante :

```bash
passwd username
```

Remplacez `username` par le nom d'utilisateur que vous avez trouvé à l'étape I.1.
Pour continuer sur l'exemple précédent, on aurait donc :

```bash
passwd votre-nom-dutilisateur
```

Vous allez ensuite taper votre nouveau mot de passe. Vous ne verrez pas les caractères que vous tapez, c'est normal. Appuyez sur `Entrée` pour valider.
Une deuxième fois, vous allez taper votre nouveau mot de passe. Appuyez sur `Entrée` pour valider.

Et voilà ! Vous avez réinitialisé votre mot de passe WSL.

### IV. Revenir à l'utilisateur par défaut

Pour revenir à l'utilisateur par défaut de votre distribution WSL, vous allez taper la commande suivante :

```bash
ubuntu config --default-user username
```

Remplacez `username` par le nom d'utilisateur que vous avez trouvé à l'étape I.1.
Dans notre exemple, on aurait donc :

```bash
ubuntu config --default-user votre-nom-dutilisateur
```

Vous pouvez maintenant tout fermer et retourner sur votre terminal WSL pour tester votre nouveau mot de passe.

## Conclusion

Vous avez réinitialisé votre mot de passe WSL. Vous pouvez maintenant continuer à travailler sur votre machine en toute sécurité. En commentaire, n'hésitez pas à m'indiquer quelle était la raison de la réinitialisation de votre mot de passe WSL ^^ Et n'oubliez pas de sécuriser votre machine avec un mot de passe de session Windows plus complexe. Votre session WSL ne sera jamais vraiment sécurisée avec un mot de passe, même complexe !