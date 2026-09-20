"""Assemble actual desktop/mobile browser captures into a GIF walkthrough."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
shots = [
    ('desktop.png', 'DESKTOP / 1280 PX — Welcome to Launchpad'),
    ('desktop-board.png', 'DESKTOP — Explore the resource collection'),
    ('desktop-more.png', 'DESKTOP — More learning resources'),
    ('mobile.png', 'MOBILE / 390 PX — Responsive layout'),
    ('mobile-board.png', 'MOBILE — Resource cards stack into one column'),
    ('mobile-more.png', 'MOBILE — Read descriptions and follow resource links'),
]
font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 20)
frames = []
for filename, label in shots:
    shot = Image.open(root / 'docs' / filename).convert('RGB')
    shot.thumbnail((1100, 840), Image.Resampling.LANCZOS)
    frame = Image.new('RGB', (1140, 910), '#f5f6ef')
    draw = ImageDraw.Draw(frame)
    draw.rectangle((0, 0, 1140, 52), fill='#244334')
    draw.text((20, 15), label, fill='white', font=font)
    frame.paste(shot, ((1140-shot.width)//2, 62))
    frames.append(frame)
frames[0].save(root / 'docs' / 'walkthrough.gif', save_all=True,
               append_images=frames[1:], duration=[2200,2600,2600,2200,2600,2600], loop=0, optimize=True)
print('Created docs/walkthrough.gif from six actual browser captures.')
