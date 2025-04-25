<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { JOBS } from "src/assets/jobs.js";

const route = useRoute();
const job = computed(() =>
  JOBS.find((j) => j.job_id === route.params.id)
);
</script>

<template>
  <section v-if="job" class="job-detail">
    <h2 class="mb-3">
      {{ job.job_title }} ({{ job.job_id }})
    </h2>

    <ul class="list-unstyled mb-4">
      <li><strong>Company:                 </strong> {{ job.company }}                            </li>
      <li><strong>Location:                </strong> {{ job.location }}                           </li>
      <li><strong>Category:                </strong> {{ job.category }}                           </li>
      <li><strong>Employment Type:         </strong> {{ job.employment_type }}                    </li>
      <li><strong>Salary Range:            </strong> {{ job.salary_range }}                       </li>
      <li><strong>Job Level:               </strong> {{ job.job_level }}                          </li>
      <li><strong>Required Skills:         </strong> {{ job.required_skills.join(", ") }}         </li>
      <li><strong>Preferred Qualifications:</strong> {{ job.preferred_qualifications.join(", ") }}</li>
      <li><strong>Description:             </strong> {{ job.job_description }}                    </li>
      <li><strong>Application Deadline:    </strong> {{ job.application_deadline }}               </li>
      <li><strong>Posted Date:             </strong> {{ job.posted_date }}                        </li>
      <li><strong>Supervisor:              </strong> {{ job.supervisor }}                         </li>
      <li><strong>Positions Available:     </strong> {{ job.positions_available }}                </li>
      <li><strong>Start Date:              </strong> {{ job.start_date }}                         </li>
      <li><strong>Tags:                    </strong> {{ job.tags.join(", ") }}                    </li>
    </ul>
  </section>

  <p v-else>
    No job found with ID “{{ route.params.id }}”.
  </p>
</template>

<style scoped>
.job-detail {
  min-height: 50vh;
}

.job-detail h2 small {
  font-weight: 400;
}
.job-detail ul li + li {
  margin-top: 0.5rem;
}
</style>
