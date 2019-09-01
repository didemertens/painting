from django.conf import settings
from django.shortcuts import render
import requests
from django.conf import settings as django_settings

# Create your views here.
def home(request):
  vermeer = paintings(request, artist_key='SK-A-2344')
  avercamp = paintings(request, artist_key='SK-A-1718')
  breitner = paintings(request, artist_key='SK-A-3584')
  mauvre = paintings(request, artist_key='SK-A-3602')
  artists = [vermeer, avercamp, breitner, mauvre]
  return render(request, 'home.html', {'artists' : artists})


def paintings(request,artist_key):
    API_KEY = 'RyVC4eDK'
    response = requests.get('https://www.rijksmuseum.nl/api/en/collection/' + artist_key + '?key=' + API_KEY + '&format=json')
    paint_info = response.json()
    return {
        'painter': paint_info['artObject']['principalMaker'],
        'painting_title': paint_info['artObject']['label']['title'],
        'painting_img' : paint_info['artObject']['webImage']['url'],
    }
