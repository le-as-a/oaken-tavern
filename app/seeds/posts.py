from app.models import db, Post

def seed_posts():
    current = [
        Post(
            user='Asuna Kitty',
            url='https://i.imgur.com/GFjiCWX.png'
        ),
        Post(
            user='Umbra Ardere',
            url='https://i.imgur.com/4RSSttN.png'
        ),
        Post(
            user='Maeve Wisteria',
            url='https://i.imgur.com/0tCwksy.png',
            desc='Shh, Gamer had too much to drink...'
        ),
        Post(
            user='Asuna Kitty',
            url='https://i.imgur.com/zrAF3RU.png'
        ),
        Post(
            user='Hisako Arato',
            url='https://i.imgur.com/B6Ob37b.png'
        )
    ]

    db.session.add_all(current)
    db.session.commit()

def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
