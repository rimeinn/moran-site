all: build

build: simplify download
	pnpm build

preview: build
	pnpm preview

dev: simplify download
	pnpm dev

simplify:
	[ -d zh-Hans ] || bash ./.vitepress/scripts/simplify.sh

download: simplify
	[ -f demo/fcitx5-rime.tgz ] || wget -P demo https://github.com/rimeinn/fcitx5-rime.js/releases/download/0.1.1/fcitx5-rime.tgz
	mkdir -p public/demo public/zh-Hans/demo
	[ -f public/demo/rime.zip ] || (wget https://nightly.link/rimeinn/rime-moran/workflows/main/main/Trad-Demo.zip -O public/demo/rime.zip && bash ./scripts/fixup_zip.sh public/demo/rime.zip)
	[ -f public/zh-Hans/demo/rime.zip ] || (wget https://nightly.link/rimeinn/rime-moran/workflows/main/main/Simp-Demo.zip -O public/zh-Hans/demo/rime.zip && bash ./scripts/fixup_zip.sh public/zh-Hans/demo/rime.zip)

clean:
	rm -rf zh-Hans

full-clean: clean
	rm -f demo/fcitx5-rime.tgz
	rm -f public/demo/rime.zip
	rm -f public/zh-Hans/demo/rime.zip

.PHONY: all build dev simplify build demo clean full-clean

