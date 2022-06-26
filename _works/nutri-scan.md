---
title: 'NutriScan'
date: '2021-11-20'
figmaURL: 'https://www.figma.com/file/VZffastNGXQ8Z9WpPgIzNV/NutriScan?node-id=1607%3A1700'
appStoreURL: 'https://apple.co/3ci31r5'
gitHubURL: 'https://github.com/centvingt/nutriscan'
categories: ['Développement iOS', 'Conception UI']
---

## Développement

-   SwiftUI 3 (compatible avec les iPhones à partir de l’iOS 15) et une architecture MVVM,

-   le SPM CarBode pour scanner le code à barres avec l’appareil photo de l’iPhone,

-   le SPM Kingfisher pour afficher les images de produits à partir de leur URL,

-   CoreData pour persister l’historique de recherche et les favoris,

-   StoreKit 2 (compatible avec les iPhones à partir de l’iOS 15) pour l’implémentation des achats In-App,

-   XCTest pour tester la majorité de la logique du ViewModèle et du Modèle.

## Conception UI

-   Maquette Figma de l’application

-   Logo et design system

## Description

NutriScan affiche les analyses nutritionnelles d’un produit grâce à son code EAN.

L’application utilise l’API Open Food Facts pour fournir à l’utilisateur leur composition nutritionnnelle, leur Nutri-Score, leur Eco-score, leur classification Nova.

L’historique des trois dernières recherches est sauvegardée dans le téléphone mais une version payante de l’application permet la sauvegarde des dix dernières recherches de produits et de sauvegarder les produits dans une liste de favoris.
