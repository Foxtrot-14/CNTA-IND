from django.db import models
from django.urls import reverse
from account.models import User
# Create your models here.
CHILD_GENDER = (
    (0,"Male"),
    (1,"Female"),
)
CHILD_STATUS = (
    (1, "Normal"),
    (2, "Reported"),
    (3, "Checked"),
)

class Child(models.Model):
    id = models.AutoField(primary_key=True)
    #avatar = models.ImageField(_(""), upload_to=None, height_field=None, width_field=None, max_length=None)
    name  = models.CharField(max_length=50)
    age = models.FloatField()
    gender = models.IntegerField(choices=CHILD_GENDER)
    f_name = models.CharField(max_length=50)
    f_contact = models.CharField(max_length=15, null=True)
    m_name = models.CharField(max_length=50, null=True)
    m_contact = models.CharField(max_length=15, null=True)
    height = models.FloatField()
    weight = models.FloatField()
    bmi = models.FloatField()
    muac = models.FloatField() 
    chestc = models.FloatField()
    headc = models.FloatField()
    msclwstng = models.BooleanField()
    fngr_dete = models.BooleanField()
    city = models.CharField(max_length=50)
    adder = models.ForeignKey(User, on_delete=models.SET_NULL,null=True, related_name='added_by')
    referred_to = models.ForeignKey(User, on_delete=models.SET_NULL,null=True, related_name='reffered_to')
    diagnosis = models.CharField(max_length=50, default="Normal")
    status = models.IntegerField(default=1, choices=CHILD_STATUS)
    
    def get_absolute_url(self):
        return reverse("child_detail", kwargs={"pk": self.pk})
    
    def __str__(self):
        return self.name
        