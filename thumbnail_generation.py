# Note: This isn't an active or dynamic way of generating thumbnails, 
# nor is it referenced in the website build, 
# this is just for your convenience for generating thumbnails for the Gallery page.
# This isn't something I ever got around to really, but if you're a future webmaster,
# you're welcome to take a crack at it. It'd make things load a lot faster,
# and the gallery page will become too slow as the years go on and more images are added.

from PIL import Image
import os

input_location = r"C:\Users\tmdt-student\Desktop\Physoc-backup\physoc-website\public\Images\Gallery\full_res"
output_location = r"C:\Users\tmdt-student\Desktop\Physoc-backup\physoc-website\public\Images\Gallery\thumbnails"
# event = '\AGM 2023'



def makeThumbnail(event):
    input_directory = str(input_location) + str(event)
    output_directory = str(output_location) + str(event)

    if not os.path.exists(output_directory):
        os.makedirs(output_directory)
    


    for filename in os.listdir(input_directory):
        if filename.endswith(".jpg") or filename.endswith(".png") or filename.endswith(".jpeg"): 
            with Image.open(os.path.join(input_directory, filename)) as img:
                img.thumbnail((200, 200))  # adjust the size as required
                img = img.convert("RGB")
                img.save(os.path.join(output_directory, filename))

call = makeThumbnail("\AGM 2023")
call = makeThumbnail("\Brainfood")
call = makeThumbnail("\Careers Fair 2022")
call = makeThumbnail("\CERN")
call = makeThumbnail("\Italy Trip")
call = makeThumbnail("\Talks by Prof Brian Espey and Prof Luke Drury")