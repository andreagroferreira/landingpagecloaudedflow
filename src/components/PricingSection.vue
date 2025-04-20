<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-16">
        <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
          Simple, transparent pricing
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Choose the perfect plan for your needs. Always know what you'll pay.
        </p>
      </div>

      <!-- Pricing Toggle -->
      <div class="flex justify-center mb-12">
        <div class="relative flex items-center">
          <span class="mr-3 text-sm font-medium text-gray-900">Monthly</span>
          <button type="button" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none" role="switch" aria-checked="false">
            <span class="sr-only">Use setting</span>
            <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
          <span class="ml-3 text-sm font-medium text-gray-900">Annual <span class="text-green-500 font-medium">(Save 20%)</span></span>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <!-- Starter Plan -->
        <div class="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
          <div class="p-8 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Starter</h3>
            <p class="mt-4 text-sm text-gray-600">Perfect for individuals and small teams getting started.</p>
            <p class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$29</span>
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <button type="button" class="mt-8 w-full rounded-md border border-indigo-600 bg-white py-2 px-3 text-center text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Get started
            </button>
          </div>
          <div class="flex flex-1 flex-col justify-between p-8">
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Up to 5 users</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Basic analytics</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">3 AI models</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Basic support</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- Pro Plan (Popular) -->
        <div class="flex flex-col rounded-lg border-2 border-indigo-600 bg-white shadow-lg transition-all hover:shadow-xl">
          <div class="p-8 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-medium text-gray-900">Pro</h3>
              <span class="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                Popular
              </span>
            </div>
            <p class="mt-4 text-sm text-gray-600">For growing businesses that need more features and capabilities.</p>
            <p class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$79</span>
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <button type="button" class="mt-8 w-full rounded-md border border-transparent bg-indigo-600 py-2 px-3 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Get started
            </button>
          </div>
          <div class="flex flex-1 flex-col justify-between p-8">
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Up to 20 users</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Advanced analytics</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">All AI models</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Priority support</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Custom integrations</p>
              </li>
            </ul>
          </div>
        </div>

        <!-- Enterprise Plan -->
        <div class="flex flex-col rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
          <div class="p-8 border-b border-gray-200">
            <h3 class="text-lg font-medium text-gray-900">Enterprise</h3>
            <p class="mt-4 text-sm text-gray-600">Custom solutions for organizations with complex requirements.</p>
            <p class="mt-8">
              <span class="text-4xl font-bold tracking-tight text-gray-900">$299</span>
              <span class="text-base font-medium text-gray-500">/mo</span>
            </p>
            <button type="button" class="mt-8 w-full rounded-md border border-indigo-600 bg-white py-2 px-3 text-center text-sm font-medium text-indigo-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Contact sales
            </button>
          </div>
          <div class="flex flex-1 flex-col justify-between p-8">
            <ul class="space-y-4">
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Unlimited users</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Enterprise analytics</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Custom AI model training</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">24/7 dedicated support</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Advanced security features</p>
              </li>
              <li class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">Dedicated account manager</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto mt-20">
        <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Frequently asked questions</h3>
        <dl class="space-y-6 divide-y divide-gray-200">
          <div class="pt-6">
            <dt class="text-lg font-medium text-gray-900">Can I change my plan later?</dt>
            <dd class="mt-2 text-base text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</dd>
          </div>
          <div class="pt-6">
            <dt class="text-lg font-medium text-gray-900">What payment methods do you accept?</dt>
            <dd class="mt-2 text-base text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</dd>
          </div>
          <div class="pt-6">
            <dt class="text-lg font-medium text-gray-900">Do you offer a free trial?</dt>
            <dd class="mt-2 text-base text-gray-600">Yes, you can try any plan free for 14 days. No credit card required during the trial period.</dd>
          </div>
          <div class="pt-6">
            <dt class="text-lg font-medium text-gray-900">Do you offer discounts for non-profits or educational institutions?</dt>
            <dd class="mt-2 text-base text-gray-600">Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Please contact our sales team for more information.</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>