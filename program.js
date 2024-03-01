# Your Python image processing script code here
from PIL import Image

def grayscale(image_path, output_path):
    with Image.open(image_path) as img:
        grayscale_img = img.convert('L')
        grayscale_img.save(output_path)

# Example usage
grayscale('input.jpg', 'output_grayscale.jpg')
