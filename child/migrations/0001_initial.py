# Generated by Django 4.1.5 on 2023-03-16 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.IntegerField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('gender', models.IntegerField(choices=[(0, 'Male'), (1, 'Female')])),
                ('f_name', models.CharField(max_length=50)),
                ('f_contact', models.CharField(max_length=15)),
                ('m_name', models.CharField(max_length=50)),
                ('m_contact', models.CharField(max_length=15)),
                ('height', models.IntegerField()),
                ('weight', models.IntegerField()),
                ('bmi', models.IntegerField()),
                ('muac', models.IntegerField()),
                ('chestc', models.IntegerField()),
                ('headc', models.IntegerField()),
                ('wtohr', models.IntegerField()),
                ('msclwstng', models.IntegerField()),
                ('stntng', models.BooleanField()),
                ('fngr_dete', models.BooleanField()),
            ],
        ),
    ]
