from app.models import db, Item

def seed_items():
    current = [
        Item(
            name='Cordial',
            desc="A refined flavor achieved from fermenting Apricots in Oak barrels before mixing with filtered water and citric acid. Drink up before touching those timed nodes!",
            price=1000,
            img_url='https://i.imgur.com/hYwf3gK.png'
        ),
        Item(
            name='Sideritis Cookie',
            desc='A baked treat made from the medicinal leaves of the Sideritis, these cookies will rejuvenate any Gleaner who needs a pick-me-up!',
            price=3000,
            img_url='https://i.imgur.com/MCGRCcg.png'
        ),
        Item(
            name='Carrot Nibbles',
            desc='This bright snack made of Carrots fresh from the gardens on Mare Lamentorum is sure to improve your eyesight when gathering supplies.',
            price=3000,
            img_url='https://i.imgur.com/1vR9ae7.png'
        ),
        Item(
            name='Pizza',
            desc="Made with the finest mozzarella, and basil, this pizza is one of Norvrandt's finest delicacies.",
            price=3000,
            img_url='https://i.imgur.com/XBtUxdN.png'
        ),
        Item(
            name='Tsai Tou Vounou',
            desc='A Mountain Tea popular with the Alchemists of the Great Work and Radz-at-Han will give your crafting a much needed boost in efficiency.',
            price=3000,
            img_url='https://i.imgur.com/fOP9bUm.png'
        ),
        Item(
            name="Cunning Craftman's Draught",
            desc="A sweet concoction designed to give one a boost in energy right before work. It's best paired with a nice hot cup of Tsai Tou Vounou to cut the sweetness.",
            price=1500,
            img_url='https://i.imgur.com/IJS4x6L.png'
        ),
        Item(
            name='Beef Stroganoff',
            desc="A Garlean specialty that Stoic picked up in his study of foreign cuisine. It's savory flavor and hearty sauce is ideal to supplement one's squat regime.",
            price=5000,
            img_url='https://i.imgur.com/laR1Crg.png'
        ),
        Item(
            name='Archon Burger',
            desc="A delicacy hand-crafted by the chefs of the Last Stand, this meal is a paragon of flavor and the last bastion of defense against the dreaded Archon Loaf.",
            price=5000,
            img_url='https://i.imgur.com/pGisYCU.png'
        ),
        Item(
            name='Pumpkin Potage',
            desc='A Hearty soup made from spices and flavors from Radz-at-Han, perfectly balanced to bring out the best characteristics of the Giant Pumpkin.',
            price=5000,
            img_url='https://i.imgur.com/RpuDjBe.png'
        ),
        Item(
            name='Thavnarian Chai',
            desc="This milk and spiced infused tea shares similarities to the flavors of Ala Mhigo, yet it's complexities offer a flavorsome kick for those unaware.",
            price=5000,
            img_url='https://i.imgur.com/DZeFfDy.png'
        )
    ]

    db.session.add_all(current)
    db.session.commit()

def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
