# Generated by Django 3.2 on 2021-06-11 08:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subscription', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subscription',
            name='age',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
