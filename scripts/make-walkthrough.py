"""Create a panning GIF from actual full-page desktop/mobile browser captures."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
root = Path(__file__).resolve().parents[1]
font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 20)
frames = []
durations = []
for filename, view_height, label in [
    ('desktop-full.png', 900, 'DESKTOP / 1280 PX'),
    ('mobile-full.png', 844, 'MOBILE / 390 PX'),
]:
    full = Image.open(root / 'docs' / filename).convert('RGB')
    stop = max(0, full.height - view_height)
    offsets = list(range(0, stop, int(view_height * .8))) + [stop]
    for offset in offsets:
        shot = full.crop((0, offset, full.width, min(full.height, offset + view_height)))
        shot.thumbnail((1100, 840), Image.Resampling.LANCZOS)
        frame = Image.new('RGB', (1140, 910), '#f5f6ef')
        draw = ImageDraw.Draw(frame)
        draw.rectangle((0, 0, 1140, 52), fill='#244334')
        draw.text((20, 15), label + ' — Launchpad resource board', fill='white', font=font)
        frame.paste(shot, ((1140-shot.width)//2, 62))
        frames.append(frame)
        durations.append(2200)
frames[0].save(root / 'docs' / 'walkthrough.gif', save_all=True,
               append_images=frames[1:], duration=durations, loop=0, optimize=True)
print(f'Created {len(frames)} walkthrough frames covering all resources.')
