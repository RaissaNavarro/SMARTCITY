from django import forms

class CSVUploadForm(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV")

class CSVUploadTemp(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV de Temperatura")

class CSVUploadCont(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV do Contador")

class CSVUploadUmid(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV de Umidade")

class CSVUploadLumi(forms.Form):
    file = forms.FileField(label="Selecione um arquivo CSV de Luminosidade")


    