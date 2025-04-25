<script setup>
import { ref } from "vue";
import { JOBS } from "src/assets/jobs.js";

const formRef         = ref(null);

const firstName       = ref("");
const lastName        = ref("");
const dob             = ref("");
const username        = ref("");
const password        = ref("");
const confirmPassword = ref("");
const email           = ref("");
const street          = ref("");
const suburb          = ref("");
const postcode        = ref("");
const mobile          = ref("");
const category        = ref("");
const showTerms       = ref(false);

const errors          = ref({});

const categories = JOBS.map(job => job.category);
const uniqueCategories = Array.from(new Set(categories)).sort();

function valid() {
  errors.value = {};

  if (!firstName.value) {
    errors.value.firstName = "First name is required.";
  } else if (!/^[A-Za-z]+$/.test(firstName.value)) {
    errors.value.firstName = "Only letters are allowed.";
  }

  if (!lastName.value) {
    errors.value.lastName = "Last name is required.";
  } else if (!/^[A-Za-z]+$/.test(lastName.value)) {
    errors.value.lastName = "Only letters are allowed.";
  }

  if (!dob.value) {
    errors.value.dob = "Date of birth is required.";
  } else {
    const dobDate = new Date(dob.value);

    if (isNaN(dobDate.getTime())) {
      errors.value.dob = "Invalid date format.";
    } else {
      const today = new Date();
      let age = today.getFullYear() - dobDate.getFullYear();
      const monthMargin = today.getMonth() - dobDate.getMonth();
      if (monthMargin < 0 ||
         (monthMargin === 0 && today.getDate() < dobDate.getDate())
        ) {
        age--;
      }
      if (age < 16) {
        errors.value.dob = "You must be at least 16 years old.";
      }
    }
  }

  if (!username.value) {
    errors.value.username = "Username is required.";
  } else if (username.value.length < 3) {
    errors.value.username = "Username needs to have minimum 3 characters.";
  }

  if (!password.value) {
    errors.value.password = "Password is required.";
  } else if (password.value.length < 8) {
    errors.value.password = "Minimum 8 characters.";
  } else if (!/[$%^&*]/.test(password.value)) {
    errors.value.password = "Must include at least one special character.";
  }

  if (confirmPassword.value !== password.value) {
    errors.value.confirmPassword = "Passwords do not match.";
  }

  if (!email.value) {
    errors.value.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Invalid email format.";
  }

  if (street.value.length > 40) {
    errors.value.street = "Maximum 40 characters.";
  }

  if (suburb.value.length > 20) {
    errors.value.suburb = "Maximum 20 characters.";
  }

  if (!postcode.value) {
    errors.value.postcode = "Postcode is required.";
  } else if (!/^\d{4}$/.test(postcode.value)) {
    errors.value.postcode = "Must be exactly 4 digits.";
  }

  if (!mobile.value) {
    errors.value.mobile = "Mobile number is required.";
  } else if (!/^04\d{8}$/.test(mobile.value)) {
    errors.value.mobile =
      "Must be 10 digits and start with 04.";
  }

  if (!category.value) {
    errors.value.category = "Please select a category.";
  }

  return Object.keys(errors.value).length === 0;
}

function onSubmit() {
  if (valid()) {
    formRef.value.submit();
  } else {
    const firstErrorField = document.querySelector(".text-danger");

    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: "smooth" });
    }
  }
}
</script>

<template>
  <article class="container text-start py-4">
    <h1>Job Application</h1>

    <form
      ref="formRef"
      class="py-4"
      method="post"
      action="http://mercury.swin.edu.au/it000000/formtest.php"
      @submit.prevent="onSubmit"
      novalidate
    >
      <fieldset class="border p-3 mb-4">
        <legend class="w-auto px-2">Personal Information</legend>

        <section class="row mb-3">
          <div class="col">
            <label for="firstName" class="form-label">
              First Name
              <small class="required">*</small>
            </label>

            <input v-model="firstName"
                   type="text"
                   id="firstName"
                   name="firstName"
                   class="form-control" />

            <p class="text-danger" v-if="errors.firstName">
              {{ errors.firstName }}
            </p>
          </div>

          <div class="col">
            <label for="lastName" class="form-label">
              Last Name
              <small class="required">*</small>
            </label>

            <input v-model="lastName"
                   type="text"
                   id="lastName"
                   name="lastName"
                   class="form-control" />

            <p class="text-danger" v-if="errors.lastName">
              {{ errors.lastName }}
            </p>
          </div>
        </section>

        <section class="row mb-3">
          <div class="col">
            <label for="dob" class="form-label">
              Date of Birth
              <small class="required">*</small>
            </label>

            <input v-model="dob"
                   type="date"
                   id="dob"
                   name="dob"
                   class="form-control" />

            <p class="text-danger" v-if="errors.dob">
              {{ errors.dob }}
            </p>
          </div>
        </section>
      </fieldset>

      <fieldset class="border p-3 mb-4">
        <legend class="w-auto px-2">Account Details</legend>

        <section class="row mb-3">
          <div class="col">
            <label for="username" class="form-label">
              Username
              <small class="required">*</small>
            </label>

            <input v-model="username"
                   type="text"
                   id="username"
                   name="username"
                   class="form-control" />

            <p class="text-danger" v-if="errors.username">{{ errors.username }}</p>
          </div>

          <div class="col">
            <label for="password" class="form-label">
              Password
              <small class="required">*</small>
            </label>

            <input v-model="password"
                   type="password"
                   id="password"
                   name="password"
                   class="form-control" />

            <p class="text-danger" v-if="errors.password">
              {{ errors.password }}
            </p>
          </div>
        </section>

        <section class="row mb-3">
          <div class="col">
            <label for="confirmPassword" class="form-label">
              Confirm Password
              <small class="required">*</small>
            </label>

            <input v-model="confirmPassword"
                   type="password"
                   id="confirmPassword"
                   name="confirmPassword"
                   class="form-control" />

            <p class="text-danger" v-if="errors.confirmPassword">
              {{ errors.confirmPassword }}
            </p>
          </div>

          <div class="col">
            <label for="email" class="form-label">
              Email
              <small class="required">*</small>
            </label>

            <input v-model="email"
                   type="email"
                   id="email"
                   name="email"
                   class="form-control" />

            <p class="text-danger" v-if="errors.email">
              {{ errors.email }}
            </p>
          </div>
        </section>
      </fieldset>

      <fieldset class="border p-3 mb-4">
        <legend class="w-auto px-2">Address</legend>

        <section class="row mb-3">
          <div class="col">
            <label for="street" class="form-label">Street Address</label>

            <input v-model="street"
                   type="text"
                   id="street"
                   name="street"
                   class="form-control" />

            <p class="text-danger" v-if="errors.street">
              {{ errors.street }}
            </p>
          </div>

          <div class="col">
            <label for="suburb" class="form-label">Suburb</label>

            <input v-model="suburb"
                   type="text"
                   id="suburb"
                   name="suburb"
                   class="form-control" />

            <p class="text-danger" v-if="errors.suburb">
              {{ errors.suburb }}
            </p>
          </div>
        </section>

        <section class="row mb-3">
          <div class="col">
            <label for="postcode" class="form-label">Postcode</label>

            <input v-model="postcode"
                   type="text"
                   id="postcode"
                   name="postcode"
                   class="form-control"
                   maxlength="4" />

            <p class="text-danger" v-if="errors.postcode">
              {{ errors.postcode }}
            </p>
          </div>

          <div class="col">
            <label for="mobile" class="form-label">Mobile Number</label>

            <input v-model="mobile"
                   type="text"
                   id="mobile"
                   name="mobile"
                   class="form-control"
                   maxlength="10" />

            <p class="text-danger" v-if="errors.mobile">
              {{ errors.mobile }}
            </p>
          </div>
        </section>
      </fieldset>

      <section class="row mb-5">
        <div class="col">
          <label for="category" class="form-label">
            Preferred Job Category
            <small class="required">*</small>
          </label>

          <select
            v-model="category"
            id="category"
            name="category"
            class="form-select"
          >
            <option value="" disabled>-- Please select --</option>

            <option
              v-for="cat in uniqueCategories"
              :key="cat"
              :value="cat"
            >
              {{ cat }}
            </option>
          </select>

          <p class="text-danger" v-if="errors.category">
            {{ errors.category }}
          </p>
        </div>
      </section>

      <section class="mb-3">
        <button
          type="button"
          class="btn btn-secondary me-2"
          @click="showTerms = !showTerms"
        >
          Terms and Conditions
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </section>

      <section v-if="showTerms" class="border p-3 bg-light mb-3 text-black">
        <h5>Terms and Conditions</h5>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        </p>
      </section>
    </form>
  </article>
</template>

<style scoped>
fieldset {
  border-radius: 4px;
}

legend {
  font-weight: 600;
}

.text-danger {
  font-size: 0.875rem;
}

.required {
  color: red;
}
</style>
