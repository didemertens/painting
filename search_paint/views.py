from django.shortcuts import render
import requests

# Create your views here.
def home(request):
  return render(request,'home.html')


def paintingVermeer(request):
    response = requests.get('https://www.rijksmuseum.nl/api/nl/collection/SK-A-2344?key=[API_KEY]&format=json/')
    paint_info = response.json()
    return render(request, 'painting.html', {
        'painter': paint_info['principalMaker'],
        'painting_title': paint_info['title'],
        'painting_img' : paint_info['url'],
    })

# JOHANNES VERMEER
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-2344?key=[API_KEY]&format=json


# KAREL APPEL
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-5002?key=[API_KEY]format=json

# Hendrick Avercamp
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-1718?key=[API_KEY]format=json

# Anton Mauve
# https://www.rijksmuseum.nl/api/nl/collection/SK-A-3602?key=[API_KEY]format=json
