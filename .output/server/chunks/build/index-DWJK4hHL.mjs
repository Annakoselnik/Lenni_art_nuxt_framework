import { _ as _sfc_main$9, a as _sfc_main$8, b as _sfc_main$3 } from './AppOffers-35IIWrUy.mjs';
import { withCtx, openBlock, createBlock, Fragment, renderList, ref, unref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as _sfc_main$7 } from './server.mjs';
import 'vee-validate';
import './FieldCheck-Dr3yX9Cm.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'pinia';
import 'vue-router';
import '@vue/shared';
import '@vee-validate/i18n';
import '@vee-validate/rules';

const _sfc_main$2 = {
  __name: "AppTable",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    const headers = computed(
      () => Array.isArray(props.data.headers) ? props.data.headers : []
    );
    const rows = computed(
      () => Array.isArray(props.data.data) ? props.data.data : []
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "app-table" }, _attrs))}><thead class="app-table__head"><tr class="app-table__head-tr"><th class="app-table__th"></th><!--[-->`);
      ssrRenderList(unref(headers), (th, thIndex) => {
        _push(`<th class="app-table__th">${ssrInterpolate(th)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="app-table__body"><!--[-->`);
      ssrRenderList(unref(rows), (tr, trIndex) => {
        _push(`<tr class="app-table__tr"><th class="app-table__body-th">${ssrInterpolate(tr.header)}</th><!--[-->`);
        ssrRenderList(tr.values, (td, tdIndex) => {
          _push(`<td class="app-table__td">`);
          if (td && typeof td === "boolean") {
            _push(`<span class="ok"></span>`);
          } else {
            _push(`<!--[-->${ssrInterpolate(td)}<!--]-->`);
          }
          _push(`</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody><tfoot class="app-table__footer"><tr class="app-table__footer-tr"><th class="app-table__footer-th"></th><!--[-->`);
      ssrRenderList(unref(headers), (th, thIndex) => {
        _push(`<th class="app-table__footer-th">${ssrInterpolate(th)}</th>`);
      });
      _push(`<!--]--></tr></tfoot></table>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "AppServices",
  __ssrInlineRender: true,
  setup(__props) {
    const tarifs = ref({
      headers: ["Тариф «Light»", "Тариф «Promo»", "Тариф «All stars»"],
      data: [
        {
          header: "Стоимость за час",
          values: ["1 000 ₽", "3 000 ₽", "3 000 ₽"]
        },
        {
          header: "Ведущий мероприятия",
          values: ["", true, true]
        },
        {
          header: "Фотосъемка",
          values: [true, true, true]
        },
        {
          header: "Видеосъемка",
          values: ["", "", true]
        },
        {
          header: "Организация питания",
          values: ["", true, true]
        },
        {
          header: "Декор",
          values: ["", "", true]
        },
        {
          header: "Звуковое сопровождение",
          values: ["", true, true]
        },
        {
          header: "Дополнительное освещение",
          values: ["", "", true]
        },
        {
          header: "Клининг",
          values: ["", "", true]
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppTable = _sfc_main$2;
      _push(`<!--[--><div class="app-services"><h2 class="section-title app-services__title"> Дополнительные услуги </h2><p class="app-events__section-description"> Перед запуском проекта, мы подготавливаем подробную смету и согласуем ее с клиентом. Убедившись, что все пожеланию учтены и мы можем приступать к реализациии проекта, начинается сложная, но интересная работа, результатом которой будет проведение вашего мероприятия на высшем уровне. </p></div>`);
      _push(ssrRenderComponent(_component_AppTable, {
        data: unref(tarifs),
        class: "app-events__tariffs-table"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/AppServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppListing = _sfc_main$9;
  const _component_EventCard = _sfc_main$8;
  const _component_AppServices = _sfc_main$1;
  const _component_AppOffers = _sfc_main$3;
  const _component_SvgIcon = _sfc_main$7;
  _push(`<!--[--><div class="page-title"><span class="page-title__style">Главная / Мероприятия</span></div><div class="events">`);
  _push(ssrRenderComponent(_component_AppListing, {
    class: "events__listing",
    title: "Мероприятия",
    moreBtn: true,
    url: "/json/events.json"
  }, {
    default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(list, (card) => {
          _push2(ssrRenderComponent(_component_EventCard, {
            key: card.slug,
            data: card,
            class: "app-listing__card"
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(list, (card) => {
            return openBlock(), createBlock(_component_EventCard, {
              key: card.slug,
              data: card,
              class: "app-listing__card"
            }, null, 8, ["data"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AppServices, { class: "events__services" }, null, _parent));
  _push(ssrRenderComponent(_component_AppOffers, { class: "events__offers" }, null, _parent));
  _push(`</div><div class="events-contacts__wrapper"><ul class="events-contacts__list"><li class="events-contacts__item"><div class="events-contacts__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "events-contacts__item-icon",
    name: "information"
  }, null, _parent));
  _push(`</div><div class="events-contacts__item-content"><h2 class="events-contacts__item-title"> Цены </h2><div class="events-contacts__item-info"> Цены, указанные на сайте носят информационный характер. Мы придерживаемся индивидуального подхода в работе с клиентом. </div></div></li><li class="events-contacts__item"><div class="events-contacts__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "events-contacts__item-icon",
    name: "contact"
  }, null, _parent));
  _push(`</div><div class="events-contacts__item-content"><h2 class="events-contacts__item-title"> Контакты </h2><div class="events-contacts__item-info"> Отдел организации мероприятий </div><div class="events-contacts__item-info"><a href="mailto:idat@tusur.ru" class="events-contacts__item-info"> idat@tusur.ru </a></div></div></li><li class="events-contacts__item"><div class="events-contacts__item-mark">`);
  _push(ssrRenderComponent(_component_SvgIcon, {
    class: "events-contacts__item-icon",
    name: "handshake"
  }, null, _parent));
  _push(`</div><div class="events-contacts__item-content"><h2 class="events-contacts__item-title"> Преимущество </h2><div class="events-contacts__item-info"> Мы имеем все возможности для того, чтобы помочь как малому бизнесу и молодым талантам, так и большим корпорациям и холдингам. </div></div></li></ul></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/events/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DWJK4hHL.mjs.map
