<template>
  <client-only>
    <div
      ref="trustbox"
      class="trustpilot-widget bg-transparent"
      data-locale="es-ES"
      :data-template-id="templateId"
      :data-businessunit-id="businessunitId"
      :data-style-width="width"
      :data-style-height="height"
      :data-theme="theme"
      data-stars="3,4,5"
      data-review-languages="es"
      data-font-family="Montserrat"
    >
      <a
        href="https://www.trustpilot.com/review/garageclub.es"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  </client-only>
</template>

<script setup>
import { onMounted, ref } from "vue";

defineProps({
  templateId: {
    type: String,
    required: false,
    default: "53aa8912dec7e10d38f59f36",
  },
  businessunitId: {
    type: String,
    required: false,
    default: "62cc3582bcaeb1d0c244e2cb",
  },
  theme: {
    type: String,
    required: false,
    default: "light",
  },
  width: {
    type: String,
    required: false,
    default: "100%",
  },
  height: {
    type: String,
    required: false,
    default: "140px",
  },
});

const trustbox = ref(null);

onMounted(() => {
  nextTick(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(trustbox.value);
    }
  });
});
</script>
