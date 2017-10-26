window.app = window.app || {};

app.Reader = (function () {
    'use strict';
    
    function _ (trigger, input, options) {
        try {
            this.__trigger__ = document.querySelector(trigger);
            this.__input__ = document.querySelector(input);
            this.__preview__ = document.querySelector(options.preview);
            this.__filename__ = document.querySelector(options.filename);
            this.init();
        } catch (e) {
            console.error(e);
        }
    }

    _.prototype.init = function () {
        try {
            if (!window.File && !window.FileReader && !window.FileList && !window.Blob) {
                throw new Error('File API does not work on this browser');
            } else if (!this.__trigger__) {
                throw new Error('Trigger not found');
            } else if (!this.__input__) {
                throw new Error('Input not found');
            } else {
                this.bindEvents();
            }
        } catch (e) {
            console.error(e);
        }
    }

    _.prototype.controller = function () {
        try {
            var _this = this;

            if (_this.__input__) {
                _this.__input__.click();

                _this.__input__.addEventListener('change', function (e) {
                    var file = e.target.files[0];
                    
                    if (_this.__filename__) {
                        _this.filename(file);
                    }

                    if (_this.__preview__) {
                        _this.preview(file);
                    }
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    _.prototype.filename = function (file) {
        try {
            this.__filename__.innerText = file.name;
            this.__filename__.value = file.name;
        } catch (e) {
            console.error(e);
        }
    }

    _.prototype.preview = function (file) {
        try {
            var _this = this;

            if (file.type.match('image.*')) {
                var reader = new FileReader();
                var image = new Image();

                reader.readAsDataURL(file);

                reader.onload = function (file) {
                    image.src = file.target.result;
                    
                    image.onload = function () {
                        _this.__preview__.setAttribute('src', this.src);
                    }
                    
                    image.onerror = function () {
                        console.error('Tipo de archivo invalido: ' + file.type);
                    }
                }
            }
        } catch (e) {
            console.error(e);
        }
    }

    _.prototype.bindEvents = function () {
        try {
            var _this = this;

            _this.__trigger__.addEventListener('click', function () {
                _this.controller();
            });
        } catch (e) {
            console.error(e);
        }
    }

    return _;
})();