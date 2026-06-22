import { e as useAsyncData, d as _sfc_main$7$1, f as __nuxt_component_0$1, g as useIndexStore, h as __nuxt_component_0$2, _ as _export_sfc } from './server.mjs';
import { openBlock, createElementBlock, withKeys, withModifiers, normalizeClass, renderSlot, createElementVNode, withDirectives, Fragment, renderList, toDisplayString, vShow, createCommentVNode, createVNode, Transition, withCtx, normalizeStyle, createTextVNode, createBlock, Teleport, computed, ref, withAsyncContext, mergeProps, unref, resolveDirective, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrGetDirectiveProps, ssrGetDynamicModelProps } from 'vue/server-renderer';
import { useForm, useField } from 'vee-validate';
import { _ as _sfc_main$a } from './FieldCheck-Dr3yX9Cm.mjs';

function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined';
  if (str === null) str = 'null';
  if (str === false) str = 'false';
  const text = str.toString().toLowerCase();
  return text.indexOf(query.trim()) !== -1
}

function stripGroups (options) {
  return options.filter((option) => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        });
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

const flow = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

var multiselectMixin = {
  data () {
    return {
      search: '',
      isOpen: false,
      preferredOpenDirection: 'below',
      optimizedHeight: this.maxHeight
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
      type: Boolean,
      default: true
    },
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default (option, label) {
        if (isEmpty(option)) return ''
        return label ? option[label] : option
      }
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
      type: Boolean,
      default: false
    },
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
      type: Function,
      default: null
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.');
    }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0]);
    }
  },
  computed: {
    internalValue () {
      return this.modelValue || this.modelValue === 0
        ? Array.isArray(this.modelValue) ? this.modelValue : [this.modelValue]
        : []
    },
    filteredOptions () {
      const search = this.search || '';
      const normalizedSearch = search.toLowerCase().trim();

      let options = this.options.concat();

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : this.filterOptions(options, normalizedSearch, this.label, this.customLabel);
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options;
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options;

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({ isTag: true, label: search });
        } else {
          options.unshift({ isTag: true, label: search });
        }
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map((element) => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options;
      return options.map((element) => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    }
  },
  watch: {
    internalValue: {
      handler () {
      /* istanbul ignore else */
        if (this.resetAfter && this.internalValue.length) {
          this.search = '';
          this.$emit('update:modelValue', this.multiple ? [] : null);
        }
      },
      deep: true
    },
    search () {
      this.$emit('search-change', this.search);
    }
  },
  emits: ['open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'],
  methods: {
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @return {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        this.filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @return {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query;
    },
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @return {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      const opt = this.trackBy
        ? option[this.trackBy]
        : option;
      return this.valueKeys.indexOf(opt) > -1
    },
    /**
     * Finds out if the given option is disabled
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is disabled
     */
    isOptionDisabled (option) {
      return !!option.$isDisabled
    },
    /**
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      const label = this.customLabel(option, this.label);
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option);
        return
      }
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id);
        this.search = '';
        if (this.closeOnSelect && !this.multiple) this.deactivate();
      } else {
        const isSelected = this.isSelected(option);

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option);
          return
        }

        if (this.multiple) {
          this.$emit('update:modelValue', this.internalValue.concat([option]));
        } else {
          this.$emit('update:modelValue', option);
        }

        this.$emit('select', option, this.id);

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = '';
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id);

        const groupValues = this.trackBy ? group[this.groupValues].map(val => val[this.trackBy]) : group[this.groupValues];
        const newValue = this.internalValue.filter(
          option => groupValues.indexOf(this.trackBy ? option[this.trackBy] : option) === -1
        );

        this.$emit('update:modelValue', newValue);
      } else {
        const optionsToAdd = group[this.groupValues].filter(
          option => !(this.isOptionDisabled(option) || this.isSelected(option))
        );

        // if max is defined then just select options respecting max
        if (this.max) {
          optionsToAdd.splice(this.max - this.internalValue.length);
        }

        this.$emit('select', optionsToAdd, this.id);
        this.$emit(
          'update:modelValue',
          this.internalValue.concat(optionsToAdd)
        );
      }

      if (this.closeOnSelect) this.deactivate();
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every((option) => this.isSelected(option) || this.isOptionDisabled(option)
      )
    },
    /**
     * Helper to identify if all values in a group are disabled
     *
     * @param {Object} group to check for disabled values
     */
    wholeGroupDisabled (group) {
      return group[this.groupValues].every(this.isOptionDisabled)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @return {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (option.$isDisabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate();
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option);

      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1));
        this.$emit('update:modelValue', newValue);
      } else {
        this.$emit('update:modelValue', null);
      }
      this.$emit('remove', option, this.id);

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate();
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue) && this.internalValue.length) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false);
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition();
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1;
      }

      this.isOpen = true;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = '';
        if (!this.preventAutofocus) this.$nextTick(() => this.$refs.search && this.$refs.search.focus());
      } else if (!this.preventAutofocus) {
        if (typeof this.$el !== 'undefined') this.$el.focus();
      }
      this.$emit('open', this.id);
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false;
      /* istanbul ignore else  */
      if (this.searchable) {
        if (this.$refs.search !== null && typeof this.$refs.search !== 'undefined') this.$refs.search.blur();
      } else {
        if (typeof this.$el !== 'undefined') this.$el.blur();
      }
      if (!this.preserveSearch) this.search = '';
      this.$emit('close', this.getValue(), this.id);
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate();
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      return
    },
    /**
     * Filters and sorts the options ready for selection
     * @param {Array} options
     * @param {String} search
     * @param {String} label
     * @param {Function} customLabel
     * @returns {Array}
     */
    filterOptions (options, search, label, customLabel) {
      return search
        ? options
          .filter((option) => includes(customLabel(option, label), search))
          .sort((a, b) => {
            if (typeof this.filteringSortFunc === 'function') {
              return this.filteringSortFunc(a, b)
            }
            return customLabel(a, label).length - customLabel(b, label).length
          })
        : options
    },
    /**
     *
     * @param {String} search
     * @param {String} label
     * @param {String} values
     * @param {String} groupLabel
     * @param {function} customLabel
     * @returns {function(*): *}
     */
    filterGroups (search, label, values, groupLabel, customLabel) {
      return (groups) => groups.map((group) => {
        /* istanbul ignore else */
        if (!group[values]) {
          console.warn('Options passed to vue-multiselect do not contain groups, despite the config.');
          return []
        }
        const groupOptions = this.filterOptions(group[values], search, label, customLabel);

        return groupOptions.length
          ? {
              [groupLabel]: group[groupLabel], [values]: groupOptions
            }
          : []
      })
    }
  }
};

var pointerMixin = {
  data () {
    return {
      pointer: 0,
      pointerDirty: false
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    },
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    }
  },
  watch: {
    filteredOptions () {
      this.pointerAdjust();
    },
    isOpen () {
      this.pointerDirty = false;
    },
    pointer () {
      this.$refs.search && this.$refs.search.setAttribute('aria-activedescendant', this.id + '-' + this.pointer.toString());
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return [
          'multiselect__option--disabled',
          { 'multiselect__option--group': selectedGroup.$isLabel }
        ]
      }

      const group = this.options.find((option) => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      });

      return group && !this.wholeGroupDisabled(group)
        ? [
            'multiselect__option--group',
            { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
            { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
          ]
        : 'multiselect__option--disabled'
    },
    addPointerElement ({ key } = 'Enter') {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;
        /* istanbul ignore next */
        if (this.$refs.list?.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--;
        /* istanbul ignore else */
        if (this.$refs.list?.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward();
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward();
      }
      this.pointerDirty = true;
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0;
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0;
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer] &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward();
      }
    },
    pointerSet (index) {
      this.pointer = index;
      this.pointerDirty = true;
    }
  }
};

var script = {
  name: 'vue-multiselect',
  mixins: [multiselectMixin, pointerMixin],
  compatConfig: {
    MODE: 3,
    ATTR_ENUMERATED_COERCION: false
  },
  props: {
    /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
    name: {
      type: String,
      default: ''
    },
    /**
       * Presets the selected options value.
       * @type {Object||Array||String||Integer}
       */
    modelValue: {
      type: null,
      default () {
        return []
      }
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectLabel: {
      type: String,
      default: 'Press enter to select'
    },
    /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
    selectGroupLabel: {
      type: String,
      default: 'Press enter to select group'
    },
    /**
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
       */
    selectedLabel: {
      type: String,
      default: 'Selected'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectLabel: {
      type: String,
      default: 'Press enter to remove'
    },
    /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
       */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
    },
    /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
       */
    showLabels: {
      type: Boolean,
      default: true
    },
    /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
    limit: {
      type: Number,
      default: 99999
    },
    /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
       */
    loading: {
      type: Boolean,
      default: false
    },
    /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
       */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
      type: Boolean,
      default: false
    },
    /**
       * Fixed opening direction
       * @default ''
       * @type {String}
       */
    openDirection: {
      type: String,
      default: ''
    },
    /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
    showNoOptions: {
      type: Boolean,
      default: true
    },
    showNoResults: {
      type: Boolean,
      default: true
    },
    tabindex: {
      type: Number,
      default: 0
    },
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
      type: Boolean,
      default: false
    },
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the teleportTarget element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
      type: Boolean,
      default: false
    },
    /**
     * Target selector for teleporting the dropdown element
     * @default 'body'
     * @type {String|Object}
     */
    teleportTarget: {
      type: [String, Object],
      default: 'body'
    },
    /**
     * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
     * the teleported element
     */
    contentWrapperClass: {
      type: [String, Array, Object],
      default: ''
    }
  },
  data () {
    return {
      dropdownStyles: {},
      ready: false
    }
  },
  computed: {
    hasOptionGroup () {
      return this.groupValues && this.groupLabel && this.groupSelect
    },
    isSingleLabelVisible () {
      return (
        (this.singleValue || this.singleValue === 0) &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      )
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple ? this.internalValue.slice(0, this.limit) : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels ? this.deselectLabel : ''
    },
    deselectGroupLabelText () {
      return this.showLabels ? this.deselectGroupLabel : ''
    },
    selectLabelText () {
      return this.showLabels ? this.selectLabel : ''
    },
    selectGroupLabelText () {
      return this.showLabels ? this.selectGroupLabel : ''
    },
    selectedLabelText () {
      return this.showLabels ? this.selectedLabel : ''
    },
    inputStyle () {
      if (
        this.searchable ||
          (this.multiple && this.modelValue && this.modelValue.length)
      ) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen
          ? { width: '100%' }
          : { width: '0', position: 'absolute', padding: '0' }
      }
      return ''
    },
    contentStyle () {
      return this.options.length
        ? { display: 'inline-block' }
        : { display: 'block' }
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (
        this.openDirection === 'below' ||
          this.openDirection === 'bottom'
      ) {
        return false
      } else {
        return this.preferredOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return (
        this.searchable &&
          (this.hasSingleSelectedSlot &&
            (this.visibleSingleValue || this.visibleSingleValue === 0)
            ? this.isOpen
            : true)
      )
    },
    isRequired () {
      if (this.required === false) {
        return false
      }
      // if we have a value, any value, then this isn't required
      return this.internalValue.length <= 0
    }
  },
  watch: {
    isOpen (val) {
      if (val) {
        if (this.useTeleport) {
          this.ready = false;
          // This helps with the positioning of the open dropdown when teleport is being used
          this.$nextTick(() => {
            const rect = this.$el.getBoundingClientRect();
            this.dropdownStyles = {
              position: 'absolute',
              top: `${rect.bottom + window.scrollY}px`,
              left: `${rect.left + window.scrollX}px`,
              width: `${rect.width}px`,
              zIndex: 9999
            };
            this.ready = true;
          });
        } else {
          this.ready = true;
        }
      }
    }
  }
};

const _hoisted_1 = ["tabindex", "aria-expanded", "aria-owns", "aria-activedescendant"];
const _hoisted_2 = {
  ref: "tags",
  class: "multiselect__tags"
};
const _hoisted_3 = { class: "multiselect__tags-wrap" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["onKeydown", "onMousedown"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = { class: "multiselect__spinner" };
const _hoisted_8 = ["name", "id", "spellcheck", "placeholder", "required", "value", "disabled", "tabindex", "aria-label", "aria-controls"];
const _hoisted_9 = ["id", "aria-multiselectable"];
const _hoisted_10 = { key: 0 };
const _hoisted_11 = { class: "multiselect__option" };
const _hoisted_12 = ["aria-selected", "id", "role"];
const _hoisted_13 = ["onClick", "onMouseenter", "data-select", "data-selected", "data-deselect"];
const _hoisted_14 = ["data-select", "data-deselect", "onMouseenter", "onMousedown"];
const _hoisted_15 = { class: "multiselect__option" };
const _hoisted_16 = { class: "multiselect__option" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    tabindex: _ctx.searchable ? -1 : $props.tabindex,
    class: normalizeClass([{ 'multiselect--active': _ctx.isOpen, 'multiselect--disabled': $props.disabled, 'multiselect--above': $options.isAbove, 'multiselect--has-options-group': $options.hasOptionGroup }, "multiselect"]),
    onFocus: _cache[14] || (_cache[14] = $event => (_ctx.activate())),
    onBlur: _cache[15] || (_cache[15] = $event => (_ctx.searchable ? false : _ctx.deactivate())),
    onKeydown: [
      _cache[16] || (_cache[16] = withKeys(withModifiers($event => (_ctx.pointerForward()), ["self","prevent"]), ["down"])),
      _cache[17] || (_cache[17] = withKeys(withModifiers($event => (_ctx.pointerBackward()), ["self","prevent"]), ["up"])),
      _cache[18] || (_cache[18] = withKeys(withModifiers($event => (_ctx.addPointerElement($event)), ["stop","self"]), ["enter","tab"]))
    ],
    onKeyup: _cache[19] || (_cache[19] = withKeys($event => (_ctx.deactivate()), ["esc"])),
    role: "combobox",
    "aria-expanded": _ctx.isOpen,
    "aria-owns": 'listbox-'+_ctx.id,
    "aria-activedescendant": _ctx.isOpen && _ctx.pointer !== null ? _ctx.id + '-' + _ctx.pointer : null
  }, [
    renderSlot(_ctx.$slots, "caret", { toggle: _ctx.toggle }, () => [
      createElementVNode("div", {
        onMousedown: _cache[0] || (_cache[0] = withModifiers($event => (_ctx.toggle()), ["prevent","stop"])),
        class: "multiselect__select"
      }, null, 32 /* NEED_HYDRATION */)
    ]),
    renderSlot(_ctx.$slots, "clear", { search: _ctx.search }),
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "selection", {
        search: _ctx.search,
        remove: _ctx.removeElement,
        values: $options.visibleValues,
        isOpen: _ctx.isOpen
      }, () => [
        withDirectives(createElementVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.visibleValues, (option, index) => {
            return renderSlot(_ctx.$slots, "tag", {
              option: option,
              search: _ctx.search,
              remove: _ctx.removeElement
            }, () => [
              (openBlock(), createElementBlock("span", {
                class: "multiselect__tag",
                key: index,
                onMousedown: _cache[1] || (_cache[1] = withModifiers(() => {}, ["prevent"]))
              }, [
                createElementVNode("span", {
                  textContent: toDisplayString(_ctx.getOptionLabel(option))
                }, null, 8 /* PROPS */, _hoisted_4),
                createElementVNode("i", {
                  tabindex: "1",
                  onKeydown: withKeys(withModifiers($event => (_ctx.removeElement(option)), ["prevent"]), ["enter"]),
                  onMousedown: withModifiers($event => (_ctx.removeElement(option)), ["prevent"]),
                  class: "multiselect__tag-icon"
                }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_5)
              ], 32 /* NEED_HYDRATION */))
            ])
          }), 256 /* UNKEYED_FRAGMENT */))
        ], 512 /* NEED_PATCH */), [
          [vShow, $options.visibleValues.length > 0]
        ]),
        (_ctx.internalValue && _ctx.internalValue.length > $props.limit)
          ? renderSlot(_ctx.$slots, "limit", { key: 0 }, () => [
              createElementVNode("strong", {
                class: "multiselect__strong",
                textContent: toDisplayString($props.limitText(_ctx.internalValue.length - $props.limit))
              }, null, 8 /* PROPS */, _hoisted_6)
            ])
          : createCommentVNode("v-if", true)
      ]),
      createVNode(Transition, { name: "multiselect__loading" }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "loading", {}, () => [
            withDirectives(createElementVNode("div", _hoisted_7, null, 512 /* NEED_PATCH */), [
              [vShow, $props.loading]
            ])
          ])
        ]),
        _: 3 /* FORWARDED */
      }),
      (_ctx.searchable)
        ? (openBlock(), createElementBlock("input", {
            key: 0,
            ref: "search",
            name: $props.name,
            id: _ctx.id,
            type: "text",
            autocomplete: "off",
            spellcheck: $props.spellcheck,
            placeholder: _ctx.placeholder,
            required: $options.isRequired,
            style: normalizeStyle($options.inputStyle),
            value: _ctx.search,
            disabled: $props.disabled,
            tabindex: $props.tabindex,
            "aria-label": $props.name + '-searchbox',
            onInput: _cache[2] || (_cache[2] = $event => (_ctx.updateSearch($event.target.value))),
            onFocus: _cache[3] || (_cache[3] = withModifiers($event => (_ctx.activate()), ["prevent"])),
            onBlur: _cache[4] || (_cache[4] = withModifiers($event => (_ctx.deactivate()), ["prevent"])),
            onKeyup: _cache[5] || (_cache[5] = withKeys($event => (_ctx.deactivate()), ["esc"])),
            onKeydown: [
              _cache[6] || (_cache[6] = withKeys(withModifiers($event => (_ctx.pointerForward()), ["prevent"]), ["down"])),
              _cache[7] || (_cache[7] = withKeys(withModifiers($event => (_ctx.pointerBackward()), ["prevent"]), ["up"])),
              _cache[8] || (_cache[8] = withKeys(withModifiers($event => (_ctx.addPointerElement($event)), ["prevent","stop","self"]), ["enter"])),
              _cache[9] || (_cache[9] = withKeys(withModifiers($event => (_ctx.removeLastElement()), ["stop"]), ["delete"]))
            ],
            class: "multiselect__input",
            "aria-controls": 'listbox-'+_ctx.id
          }, null, 44 /* STYLE, PROPS, NEED_HYDRATION */, _hoisted_8))
        : createCommentVNode("v-if", true),
      ($options.isSingleLabelVisible)
        ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: "multiselect__single",
            onMousedown: _cache[10] || (_cache[10] = withModifiers((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            renderSlot(_ctx.$slots, "singleLabel", { option: $options.singleValue }, () => [
              createTextVNode(toDisplayString(_ctx.currentOptionLabel), 1 /* TEXT */)
            ])
          ], 32 /* NEED_HYDRATION */))
        : createCommentVNode("v-if", true),
      ($options.isPlaceholderVisible)
        ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: "multiselect__placeholder",
            onMousedown: _cache[11] || (_cache[11] = withModifiers((...args) => (_ctx.toggle && _ctx.toggle(...args)), ["prevent"]))
          }, [
            renderSlot(_ctx.$slots, "placeholder", {}, () => [
              createTextVNode(toDisplayString(_ctx.placeholder), 1 /* TEXT */)
            ])
          ], 32 /* NEED_HYDRATION */))
        : createCommentVNode("v-if", true)
    ], 512 /* NEED_PATCH */),
    (openBlock(), createBlock(Teleport, {
      to: $props.teleportTarget,
      disabled: !$props.useTeleport
    }, [
      createVNode(Transition, { name: "multiselect" }, {
        default: withCtx(() => [
          (_ctx.isOpen && $data.ready)
            ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["multiselect__content-wrapper", $props.contentWrapperClass]),
                onFocus: _cache[12] || (_cache[12] = (...args) => (_ctx.activate && _ctx.activate(...args))),
                tabindex: "-1",
                onMousedown: _cache[13] || (_cache[13] = withModifiers(() => {}, ["prevent"])),
                style: normalizeStyle([$data.dropdownStyles, { maxHeight: _ctx.optimizedHeight + 'px' }]),
                ref: "list"
              }, [
                createElementVNode("ul", {
                  class: "multiselect__content",
                  style: normalizeStyle($options.contentStyle),
                  role: "listbox",
                  id: 'listbox-'+_ctx.id,
                  "aria-multiselectable": _ctx.multiple
                }, [
                  renderSlot(_ctx.$slots, "beforeList"),
                  (_ctx.multiple && _ctx.max === _ctx.internalValue.length)
                    ? (openBlock(), createElementBlock("li", _hoisted_10, [
                        createElementVNode("span", _hoisted_11, [
                          renderSlot(_ctx.$slots, "maxElements", {}, () => [
                            createTextVNode("Maximum of " + toDisplayString(_ctx.max) + " options selected. First remove a selected option to select another.", 1 /* TEXT */)
                          ])
                        ])
                      ]))
                    : createCommentVNode("v-if", true),
                  (!_ctx.max || _ctx.internalValue.length < _ctx.max)
                    ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.filteredOptions, (option, index) => {
                        return (openBlock(), createElementBlock("li", {
                          class: "multiselect__element",
                          key: index,
                          "aria-selected": _ctx.isSelected(option),
                          id: _ctx.id + '-' + index,
                          role: !(option && (option.$isLabel || option.$isDisabled)) ? 'option' : null
                        }, [
                          (!(option && (option.$isLabel || option.$isDisabled)))
                            ? (openBlock(), createElementBlock("span", {
                                key: 0,
                                class: normalizeClass([_ctx.optionHighlight(index, option), "multiselect__option"]),
                                onClick: withModifiers($event => (_ctx.select(option)), ["stop"]),
                                onMouseenter: withModifiers($event => (_ctx.pointerSet(index)), ["self"]),
                                "data-select": option && option.isTag ? _ctx.tagPlaceholder : $options.selectLabelText,
                                "data-selected": $options.selectedLabelText,
                                "data-deselect": $options.deselectLabelText
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option: option,
                                  search: _ctx.search,
                                  index: index
                                }, () => [
                                  createElementVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                                ])
                              ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_13))
                            : createCommentVNode("v-if", true),
                          (option && (option.$isLabel || option.$isDisabled))
                            ? (openBlock(), createElementBlock("span", {
                                key: 1,
                                "data-select": _ctx.groupSelect && $options.selectGroupLabelText,
                                "data-deselect": _ctx.groupSelect && $options.deselectGroupLabelText,
                                class: normalizeClass([_ctx.groupHighlight(index, option), "multiselect__option"]),
                                onMouseenter: withModifiers($event => (_ctx.groupSelect && _ctx.pointerSet(index)), ["self"]),
                                onMousedown: withModifiers($event => (_ctx.selectGroup(option)), ["prevent"])
                              }, [
                                renderSlot(_ctx.$slots, "option", {
                                  option: option,
                                  search: _ctx.search,
                                  index: index
                                }, () => [
                                  createElementVNode("span", null, toDisplayString(_ctx.getOptionLabel(option)), 1 /* TEXT */)
                                ])
                              ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_14))
                            : createCommentVNode("v-if", true)
                        ], 8 /* PROPS */, _hoisted_12))
                      }), 128 /* KEYED_FRAGMENT */))
                    : createCommentVNode("v-if", true),
                  withDirectives(createElementVNode("li", null, [
                    createElementVNode("span", _hoisted_15, [
                      renderSlot(_ctx.$slots, "noResult", { search: _ctx.search }, () => [
                        _cache[20] || (_cache[20] = createTextVNode("No elements found. Consider changing the search query."))
                      ])
                    ])
                  ], 512 /* NEED_PATCH */), [
                    [vShow, $props.showNoResults && (_ctx.filteredOptions.length === 0 && _ctx.search && !$props.loading)]
                  ]),
                  withDirectives(createElementVNode("li", null, [
                    createElementVNode("span", _hoisted_16, [
                      renderSlot(_ctx.$slots, "noOptions", {}, () => [
                        _cache[21] || (_cache[21] = createTextVNode("List is empty."))
                      ])
                    ])
                  ], 512 /* NEED_PATCH */), [
                    [vShow, $props.showNoOptions && _ctx.filteredOptions.length === 0 && !_ctx.search && !$props.loading]
                  ]),
                  renderSlot(_ctx.$slots, "afterList")
                ], 12 /* STYLE, PROPS */, _hoisted_9)
              ], 38 /* CLASS, STYLE, NEED_HYDRATION */))
            : createCommentVNode("v-if", true)
        ]),
        _: 3 /* FORWARDED */
      })
    ], 8 /* PROPS */, ["to", "disabled"]))
  ], 42 /* CLASS, PROPS, NEED_HYDRATION */, _hoisted_1))
}

script.render = render;

const _sfc_main$9 = {
  __name: "AppListing",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    //new 17-3
    url: {
      type: String,
      default: "",
      required: true
    },
    moreBtn: {
      type: Boolean,
      default: false
    },
    moreLink: {
      type: Boolean,
      default: false
    },
    grid: {
      type: String,
      default: "row"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const listClass = computed(() => props.grid === "column" ? "app-listing__column-list" : "app-listing__list");
    const list = ref([]);
    const { data } = props.url ? ([__temp, __restore] = withAsyncContext(() => useAsyncData(`list-${props.url}`, () => {
      return $fetch(props.url);
    })), __temp = await __temp, __restore(), __temp) : { data: null };
    if (data?.value) list.value = data.value;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$7$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-listing" }, _attrs))}><h1 class="app-listing__title section-title">${ssrInterpolate(__props.title)}</h1><div class="${ssrRenderClass(unref(listClass))}">`);
      ssrRenderSlot(_ctx.$slots, "default", { list: unref(list) }, null, _push, _parent);
      _push(`</div><div class="app-listing__block-button">`);
      if (__props.moreBtn) {
        _push(`<button type="button" class="more-btn app-listing__more-btn btn-all"> Показать еще `);
        _push(ssrRenderComponent(_component_SvgIcon, {
          class: "more-btn__down",
          name: "arrow",
          width: "62",
          height: "92"
        }, null, _parent));
        _push(`</button>`);
      } else if (__props.moreLink) {
        _push(`<a href="#" class="app-listing__link link btn-all">Смотреть все</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppListing.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const date = computed(() => {
      try {
        const date2 = new Date(props.data.date);
        return `${date2.toLocaleDateString()} | начало ${date2.toLocaleTimeString(
          "ru-RU",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        )}`;
      } catch {
        return null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "event-card" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/events/${__props.data.slug}`,
        class: "event-card__link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<picture class="event-card__picture"${_scopeId}><source type="image/webp"${ssrRenderAttr("srcset", __props.data.img_webp)}${_scopeId}><img${ssrRenderAttr("src", __props.data.img)}${ssrRenderAttr("alt", __props.data.alt)} class="event-card__img"${_scopeId}></picture><h2 class="event-card__title article-card__title-link"${_scopeId}>${ssrInterpolate(__props.data.title)}</h2><p class="event-card__description"${_scopeId}>${ssrInterpolate(__props.data.description)}</p>`);
            if (unref(date)) {
              _push2(`<time${ssrRenderAttr("datetime", __props.data.date)} class="event-card__time"${_scopeId}>${ssrInterpolate(unref(date))}</time>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("picture", { class: "event-card__picture" }, [
                createVNode("source", {
                  type: "image/webp",
                  srcset: __props.data.img_webp
                }, null, 8, ["srcset"]),
                createVNode("img", {
                  src: __props.data.img,
                  alt: __props.data.alt,
                  class: "event-card__img"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("h2", { class: "event-card__title article-card__title-link" }, toDisplayString(__props.data.title), 1),
              createVNode("p", { class: "event-card__description" }, toDisplayString(__props.data.description), 1),
              unref(date) ? (openBlock(), createBlock("time", {
                key: 0,
                datetime: __props.data.date,
                class: "event-card__time"
              }, toDisplayString(unref(date)), 9, ["datetime"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/event/EventCard.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "ModalWindow",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ""
    },
    alive: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const store = useIndexStore();
    const props = __props;
    computed(() => {
      return props.name ? store.modal[props.name] : null;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      resolveDirective("keyup");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ModalWindow.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$7, { __name: "ModalWindow" });
const _sfc_main$6 = {
  __name: "FieldRadio",
  __ssrInlineRender: true,
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const initialValue = computed(
      () => (props.initialValue || props.initialValue === 0) && props.options.find((option) => option.value === props.initialValue)?.value || void 0
    );
    const { errorMessage, handleChange, value } = useField(
      props.name,
      props.rules,
      {
        initialValue: initialValue.value,
        type: "radio"
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "field" }, _attrs))}><fieldset class="radio field__radio">`);
      if (__props.label) {
        _push(`<legend class="field__title field-title">${ssrInterpolate(__props.label)}</legend>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.options, (option) => {
        _push(`<label class="radio__item"><input type="radio" class="radio__input"${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("value", option.value)}${ssrIncludeBooleanAttr(unref(value) === option.value) ? " checked" : ""}><span class="radio__mark"></span><span class="radio__caption">${option.label ?? ""}</span></label>`);
      });
      _push(`<!--]--></fieldset>`);
      if (unref(errorMessage) && __props.submitCount) {
        _push(`<span class="field__error field-error">${ssrInterpolate(unref(errorMessage))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/FieldRadio.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "FieldSelect",
  __ssrInlineRender: true,
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    options: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    },
    searchable: {
      type: Boolean,
      default: false
    },
    allowEmpty: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const selected = ref(
      props.initialValue || props.initialValue === 0 ? props.options.find((option) => option.value === props.initialValue) : void 0
    );
    const { errorMessage, handleChange } = useField(props.name, props.rules, {
      initialValue: selected.value?.value
    });
    const onSelect = (option) => {
      handleChange(option.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "field" }, _attrs))}>`);
      if (__props.label) {
        _push(`<span class="field__title field-title">${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(script), {
        modelValue: unref(selected),
        "onUpdate:modelValue": [($event) => isRef(selected) ? selected.value = $event : null, onSelect],
        options: __props.options,
        label: "label",
        "track-by": "value",
        placeholder: __props.placeholder,
        searchable: __props.searchable,
        allowEmpty: __props.allowEmpty,
        selectLabel: "",
        selectedLabel: "",
        deselectLabel: __props.allowEmpty ? "⮾" : "",
        class: "field__select"
      }, null, _parent));
      if (unref(errorMessage) && __props.submitCount) {
        _push(`<span class="field__error field-error">${ssrInterpolate(unref(errorMessage))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/FieldSelect.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "FieldDate",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    ref(null);
    const dateDay = ref(null);
    const dateMonth = ref(null);
    const dateYear = ref(null);
    ref(void 0);
    const { errorMessage, handleChange } = useField(props.name, props.rules, {});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "field" }, _attrs))}>`);
      if (__props.label) {
        _push(`<span class="field__title field-title events-form__date">${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="field__date"><div class="field__date-inputs"><input class="field__date-input" type="text" placeholder="ДД" readonly${ssrRenderAttr("value", unref(dateDay))}><input class="field__date-input" type="text" placeholder="ММ" readonly${ssrRenderAttr("value", unref(dateMonth))}><input class="field__date-input field__date-input--year" type="text" placeholder="ГГГГ" readonly${ssrRenderAttr("value", unref(dateYear))}></div><input class="field__date-picker" type="text" readonly required></div>`);
      if (unref(errorMessage) && __props.submitCount) {
        _push(`<span class="field__error field-error">${ssrInterpolate(unref(errorMessage))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/FieldDate.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "FieldInput",
  __ssrInlineRender: true,
  props: {
    initialValue: {
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    rules: {
      type: Object,
      default: () => ({})
    },
    mask: {
      type: [Object, String],
      default: ""
    },
    submitCount: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { errorMessage, value } = useField(props.name, props.rules, {
      initialValue: props.initialValue
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_maska = resolveDirective("maska");
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "field" }, _attrs))}><label class="field__input-label">`);
      if (__props.label) {
        _push(`<span class="field__label">${ssrInterpolate(__props.label)}`);
        if (__props.rules?.required) {
          _push(`<!--[-->*<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        class: "field__input",
        type: __props.type,
        placeholder: __props.placeholder
      }, ssrGetDirectiveProps(_ctx, _directive_maska, __props.mask)), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, unref(value)))))}></label>`);
      if (unref(errorMessage) && __props.submitCount) {
        _push(`<span class="field__error field-error">${ssrInterpolate(unref(errorMessage))}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/FieldInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  data() {
    return {
      userWishes: ""
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "field" }, _attrs))}><textarea class="field__input pop-up-text" cols="115" rows="5">${ssrInterpolate($data.userWishes)}</textarea></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/field/FieldText.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "FieldText" });
const _sfc_main$1 = {
  __name: "EventsForm",
  __ssrInlineRender: true,
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const { submitCount, handleSubmit } = useForm();
    const close = () => {
      emits("close");
    };
    handleSubmit((submitValues) => {
      console.log(submitValues);
      alert("Отправлено");
      close();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FieldRadio = _sfc_main$6;
      const _component_FieldSelect = _sfc_main$5;
      const _component_FieldDate = _sfc_main$4;
      const _component_FieldInput = _sfc_main$3;
      const _component_FieldText = __nuxt_component_4;
      const _component_FieldCheck = _sfc_main$a;
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "events-form" }, _attrs))}><div class="events-form__list"><div class="events-form__group events-form__group--w50">`);
      _push(ssrRenderComponent(_component_FieldRadio, {
        name: "format",
        options: [
          {
            label: "Мастер-класс/семинар",
            value: "seminar"
          },
          {
            label: "Концерт/выступление",
            value: "concert"
          },
          {
            label: "Выставка/показ",
            value: "show"
          },
          {
            label: "Другое",
            value: "other"
          }
        ],
        initialValue: "seminar",
        rules: { required: true },
        submitCount: unref(submitCount),
        label: "Формат мероприятия:",
        class: "events-form__field"
      }, null, _parent));
      _push(`</div><div class="events-form__group events-form__group--w50">`);
      _push(ssrRenderComponent(_component_FieldSelect, {
        name: "amount",
        options: [
          {
            label: "до 20 человек",
            value: "20"
          },
          {
            label: "от 20 до 100 человек",
            value: "100"
          },
          {
            label: "от 100 до 500 человек",
            value: "500"
          },
          {
            label: "более 500 человек",
            value: "1000"
          }
        ],
        initialValue: "20",
        rules: { required: true },
        submitCount: unref(submitCount),
        label: "Планируемое количество посетителей:",
        placeholder: "Выберите количество",
        class: "events-form__field"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FieldDate, {
        name: "date",
        label: "Дата проведения:",
        rules: { required: true },
        submitCount: unref(submitCount)
      }, null, _parent));
      _push(`</div><div class="events-form__section"><h3 class="events-form__section-title field-title"> Контакные данные: </h3><div class="events-form__list">`);
      _push(ssrRenderComponent(_component_FieldInput, {
        name: "first_name",
        label: "Имя",
        placeholder: "Имя",
        rules: { required: true },
        submitCount: unref(submitCount),
        class: "events-form__field events-form__field--w50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FieldInput, {
        name: "last_name",
        label: "Фамилия",
        placeholder: "Фамилия",
        rules: { required: true },
        submitCount: unref(submitCount),
        class: "events-form__field events-form__field--w50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FieldInput, {
        name: "phone",
        label: "Телефон",
        placeholder: "+7 (###) ###-##-##",
        rules: { required: true, phone: true },
        mask: "+7 (###) ###-##-##",
        submitCount: unref(submitCount),
        class: "events-form__field events-form__field--w50"
      }, null, _parent));
      _push(ssrRenderComponent(_component_FieldInput, {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email",
        rules: { required: true, email: true },
        submitCount: unref(submitCount),
        class: "events-form__field events-form__field--w50"
      }, null, _parent));
      _push(`</div></div><div><h3 class="events-form__section-title field-title"> Есть желания? Напишите нам: </h3>`);
      _push(ssrRenderComponent(_component_FieldText, {
        name: "text",
        type: "text",
        class: "events-form__field events-form__field--wishes"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_FieldCheck, {
        name: "agreement",
        rules: { required: true },
        submitCount: unref(submitCount),
        label: `Я соглашаюсь с <a href='#' target='_blank'>пользовательским соглашением</a> и с <a href='#' target='_blank'>политикой</a> использования персональных данных`,
        smallLabel: "",
        class: "events-form__field"
      }, null, _parent));
      _push(`<div class="events-form__btns"><button type="submit" class="btn events-form__submit">Отправить</button><button type="button" class="events-form__close-btn"> Закрыть </button></div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/events/EventsForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "AppOffers",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useIndexStore();
    const closePopup = () => {
      store.closeModal("getOffer");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ModalWindow = __nuxt_component_0;
      const _component_EventsForm = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "app-offers" }, _attrs))}><h2 class="app-offers__title">Я ХОЧУ:</h2><div class="app-offers__btns"><button class="app-offers__btn btn btn--red" type="button"> Провести мероприятие </button><button class="app-offers__btn btn" type="button">Стать арендатором</button></div>`);
      _push(ssrRenderComponent(_component_ModalWindow, {
        alive: "",
        name: "getOffer",
        title: "Заполните форму<br />и мы подберем площадку"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_EventsForm, { onClose: closePopup }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_EventsForm, { onClose: closePopup })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppOffers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$9 as _, _sfc_main$8 as a, _sfc_main as b };
//# sourceMappingURL=AppOffers-35IIWrUy.mjs.map
