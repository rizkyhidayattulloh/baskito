<template layout="admin">
  <Head title="Modal" />

  <PageSection header="Modal Page" :back-link="$route('admin.modal')">
    <PageTitle>Modal</PageTitle>
    <PageDescription>Modal component usage example.</PageDescription>
  </PageSection>

  <div class="row">
    <div class="col-12 col-md-6 col-lg-6">
      <div class="card">
        <div class="card-header">
          <h4>Modal</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <p class="mb-2">Default Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#defaultModal">Show Default Modal</button>
          </div>
          <div class="form-group">
            <p class="mb-2">Centered Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#centeredModal">Show Centered Modal</button>
          </div>
          <div class="form-group">
            <p class="mb-2">Without Animation Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#withoutAnimationModal">Show Without Animation Modal</button>
          </div>
          <div class="form-group">
            <p class="mb-2">Sized Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#sizedModal">Show Sized Modal</button>
          </div>
          <div class="form-group">
            <p class="mb-2">Custom Naming Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#customNamingModal">Show Custom Naming Modal</button>
          </div>
          <div class="form-group">
            <p class="mb-2">Custom Template Modal</p>
            <button class="btn btn-primary" data-toggle="modal" data-target="#customTemplateModal">Show Custom Template Modal</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <Teleport to="body">
    <Modal title="Default Modal" id="defaultModal" @submit="submit">
      <p>Modal body goes here.</p>
    </Modal>

    <Modal title="Centered Modal" id="centeredModal" :is-center="true" @submit="submit">
      <p>Modal body goes here.</p>
    </Modal>

    <Modal title="Without Animation Modal" id="withoutAnimationModal" :with-fade="false" @submit="submit">
      <p>Modal body goes here.</p>
    </Modal>

    <Modal title="Sized Modal" id="sizedModal" size="lg" @submit="submit">
      <p>Modal body goes here.</p>
    </Modal>

    <Modal title="Custom Naming Modal" id="customNamingModal" submitText="Save" closeText="Exit" @submit="submit">
      <p>Modal body goes here.</p>
    </Modal>

    <Modal id="customTemplateModal">
      <template #header>
        <b><i>Custom Template</i></b>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </template>

      <template #default>
        <p>Modal body goes here.</p>
      </template>

      <template #footer>
        <button type="button" class="btn btn-warning" @click="submit">Update</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </template>
    </Modal>
  </Teleport>
</template>

<script setup lang="ts">
import PageDescription from "@components/admin/layout/Page/PageDescription.vue";
import PageSection from "@components/admin/layout/Page/PageSection.vue";
import PageTitle from "@components/admin/layout/Page/PageTitle.vue";
import Modal from "@components/ui/Modal/Modal.vue";
import { Head } from "@inertiajs/inertia-vue3";

function submit() {
  console.log('submitted');
}
</script>
<style scoped></style>
