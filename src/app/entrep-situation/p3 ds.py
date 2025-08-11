import random

def monte_carlo(nb_essais):
    nb_retouche = 0

    for _ in range(nb_essais):
        longueur_totale = 0

        for _ in range(3):  # Trois tuyaux
            deviation = (random.random() * 20) - 10  # entre -10 mm et +10 mm
            longueur = 2000 + deviation  # Longueur en mm
            longueur_totale += longueur

        if abs(longueur_totale - 6000) > 16:
            nb_retouche += 1

    probabilite = nb_retouche / nb_essais
    return probabilite

# Exemple d’utilisation
print("Probabilité de retouche manuelle :", monte_carlo(1000000))
