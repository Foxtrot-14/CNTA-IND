# Generated by Django 4.1.5 on 2023-02-08 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_user_otp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='otp',
            field=models.IntegerField(default=1234),
        ),
    ]
