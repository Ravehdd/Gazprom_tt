# Generated by Django 4.2.15 on 2024-08-23 10:46

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("table", "0002_alter_product_external_str_id"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="articleid",
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name="product",
            name="subarticleid",
            field=models.IntegerField(),
        ),
    ]
