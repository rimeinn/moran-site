all: build

build: simplify download
	pnpm build

dev: simplify download
	pnpm dev

simplify:
	[ -d zh-Hans ] || bash ./.vitepress/scripts/simplify.sh

download: simplify
	[ -f demo/fcitx5-rime.tgz ] || wget -qNP demo https://github.com/rimeinn/fcitx5-rime.js/releases/download/0.1.1/fcitx5-rime.tgz
	[ -f public/Trad-Demo.zip ] || wget -qNP public https://nightly.link/rimeinn/rime-moran/workflows/main/main/Trad-Demo.zip
	[ -f public/Simp-Demo.zip ] || wget -qNP public https://nightly.link/rimeinn/rime-moran/workflows/main/main/Simp-Demo.zip

clean:
	rm -rf zh-Hans

full-clean: clean
	rm -f demo/fcitx5-rime.tgz
	rm -f public/demo.zip

.PHONY: all build dev simplify build demo clean full-clean

