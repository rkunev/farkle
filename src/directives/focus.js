export default {
    name: 'focus',
    definition: {
        bind: function(el) {
            el.tabIndex = 0;
        },
        update: function(el, binding) {
            if (binding.value) {
                el.focus();
            }
        }
    }
}
