#coding=utf-8
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import string
import random
import sys
import math
import base64
import StringIO
def gene_text():
    source = list(string.letters)
    for index in range(0,10):
        source.append(str(index))
    return ''.join(random.sample(source,4))
# 随机字母:
def rndChar():
    return chr(random.randint(65, 90))

# 随机颜色1:
def rndColor():
    return (random.randint(64, 255), random.randint(64, 255), random.randint(64, 255))

# 随机颜色2:
def rndColor2():
    return (random.randint(32, 127), random.randint(32, 127), random.randint(32, 127))

def create():
    # 240 x 60:
    width = 60 * 4
    height = 60
    image = Image.new('RGB', (width, height), (255, 255, 255))
    # 创建Font对象:
    font = ImageFont.truetype('aaa.ttf', 36)
    # 创建Draw对象:
    draw = ImageDraw.Draw(image)
    text = gene_text()
    # 填充每个像素:
    for x in range(width):
        for y in range(height):
            draw.point((x, y), fill=rndColor())
    # 输出文字:
    for t in range(4):
        draw.text((60 * t + 10, 10), text[t], font=font, fill=rndColor2())
    # 模糊:
#    image = image.filter(ImageFilter.BLUR)
    #print(text)
    output = StringIO.StringIO()
    image.save(output,'JPEG',quality=70)
    img_data = output.getvalue()
    output.close()
    return text,img_data
#print(img_data)
#ls_s=base64.b64encode(image)
#print(ls_s)
#f=open(r'code.jpg','rb') #二进制方式打开图文件
#ls_f=base64.b64encode(f.read()) #读取文件内容，转换为base64编码
#print(ls_f)
#f.close()
