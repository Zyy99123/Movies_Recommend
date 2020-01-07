# Generated by Django 3.0.1 on 2020-01-07 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie_action',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_cartoon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_comedy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_crime',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_horrible',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_love',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_science',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
        migrations.CreateModel(
            name='Movie_story',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num', models.IntegerField(max_length=1000, verbose_name='电影编号')),
                ('movie_name', models.CharField(max_length=1000, verbose_name='片名')),
                ('movie_source', models.CharField(max_length=1000, verbose_name='海报路径')),
                ('up_time', models.CharField(max_length=1000, verbose_name='上映时间')),
                ('movie_adress', models.CharField(max_length=1000, verbose_name='影片归属地')),
                ('director', models.CharField(max_length=2000, verbose_name='导演')),
                ('actor', models.CharField(max_length=2000, verbose_name='演员表')),
                ('sorce', models.FloatField(max_length=2000, verbose_name='评分')),
                ('story', models.CharField(max_length=1000, verbose_name='剧情概要')),
            ],
        ),
    ]