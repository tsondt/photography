# Photography
A jekyll website for photographers

## Resize and add watermark with ImageMagick
```
cd images
for i in $(ls *.JPG)
do
echo $i
convert -resize 1024 $i fulls/$i
convert -resize 512 $i thumbs/$i
composite -watermark 10% -gravity SouthEast watermark.png fulls/$i fulls/$i
done
```

## To preview this site offline:
```
git clone https://github.com/tsondt/photos
```
* with `ruby` and `bundle`:
```
BUNDLE_PATH=.bundle bundle check || \
bundle install && \
bundle exec jekyll serve
```
* with Docker:
```
./docker-build.sh
./docker-run.sh
```
---
Published by [tsondt](https://github.com/tsondt) with [Jekyll](https://github.com/jekyll/jekyll).
Forked from https://github.com/ramswaroop/photography using a template from [AJ](https://twitter.com/ajlkn). [License](LICENSE).
