from django.shortcuts import render, get_object_or_404
from .models import StudyGtPlanets


def studygtplanets(request):
    stadyiplanets = StudyGtPlanets.objects.all()
    # stadyiplanets = StudyGtPlanets.objects.order_by('date')
    # Альтернатива с сортировкой по убываию
    return render(request, 'studygtplanets/studygtplanets.html', {'stadyplanets': stadyiplanets})


# То, что в кавычках передаётся в html-документ, как правило пишется во множественном числе (s-на конце)
# то, что справа - локальная переменная, объявленная между объявлением функции и 'return'.

def idtion(request, studygtplanets_id):
    studygtplanets = get_object_or_404(StudyGtPlanets, pk=studygtplanets_id)
    return render(request, 'studygtplanets/idtions.html', {'studygtplanets': studygtplanets})

# Заменим "{'id': studygtplanets_id}" на "{'studygtplanets': studygtplanets}" для изменения значения
