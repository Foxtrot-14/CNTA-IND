from django.db import models
from django.urls import reverse
from account.models import User
# Create your models here.
CHILD_GENDER = (
    (0,"Male"),
    (1,"Female"),
)
CHILD_STATUS = (
    (1, 'Normal')
    (2, 'Reported')
    (3, 'Checked')
)

class Child(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    #avatar = models.ImageField(_(""), upload_to=None, height_field=None, width_field=None, max_length=None)
    name  = models.CharField(max_length=50)
    age = models.IntegerField()
    gender = models.IntegerField(choices=CHILD_GENDER)
    f_name = models.CharField(max_length=50)
    f_contact = models.CharField(max_length=15)
    m_name = models.CharField(max_length=50)
    m_contact = models.CharField(max_length=15)
    height = models.IntegerField()
    weight = models.IntegerField()
    bmi = models.IntegerField()
    muac = models.IntegerField() 
    chestc = models.IntegerField()
    headc = models.IntegerField()
    wtohr = models.IntegerField()
    msclwstng = models.BooleanField()
    stntng = models.BooleanField()
    fngr_dete = models.BooleanField()
    addder = models.ForeignKey(User, on_delete=models.SET_NULL)
    referred_to = models.ForeignKey(User, on_delete=models.SET_NULL)
    diagnosis = models.CharField(max_length=50, default="Normal")
    status = models.IntegerField(default=1, choices=CHILD_STATUS)
    
    def get_absolute_url(self):
        return reverse("child_detail", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.name
        