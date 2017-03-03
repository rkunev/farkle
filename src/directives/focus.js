export default {
    name: 'focus',
    definition: {
        bind: function(el, binding) {
            el.tabIndex = binding.value ? 0 : -1;
        },
        update: function(el, binding) {
            el.tabIndex = binding.value ? 0 : -1;

            if (binding.value) {
                el.focus();
            }
        }
    }
}
