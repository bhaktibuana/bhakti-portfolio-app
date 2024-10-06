<template>
	<layout-section-container id="about">
		<div class="_home-about-container">
			<layout-section-header
				:title="$t('about_me')"
				icon-name="ghost-filled"
			/>

			<div class="_home-about-body">
				<avatar />

				<div class="_home-about-content">
					<span class="title">{{ $t('im_bhakti') }}</span>
					<span class="subtitle">{{ $t('software_engineer') }}</span>
					<span class="description">{{
						$t('about_me_description')
					}}</span>

					<div class="contact-wrapper">
						<div class="contact-item-wrapper">
							<div class="icon-wrapper">
								<icon
									name="brand-linkedin"
									:size="14"
									:stroke="1.5"
								/>
							</div>

							<a
								href="https://linkedin.com/in/bhaktibuana"
								target="_blank"
							>
								LinkedIn
							</a>
						</div>

						<div v-if="screenSize.width >= 576">
							<base-divider orientation="vertical" />
						</div>

						<div class="contact-item-wrapper">
							<div class="icon-wrapper">
								<icon
									name="brand-github"
									:size="14"
									:stroke="1.5"
								/>
							</div>

							<a
								href="https://github.com/bhaktibuana"
								target="_blank"
							>
								GitHub
							</a>
						</div>

						<div v-if="screenSize.width >= 576">
							<base-divider orientation="vertical" />
						</div>

						<div class="contact-item-wrapper">
							<div class="icon-wrapper">
								<icon name="mail" :size="14" :stroke="1.5" />
							</div>

							<base-tooltip
								placement="bottom"
								:title="mailCopyTitle"
							>
								<span
									@click="handleCopyMail"
									@mouseleave="handleBlurCopyMail"
								>
									bhaktibuana19@gmail.com
								</span>
							</base-tooltip>
						</div>
					</div>
				</div>
			</div>
		</div>
	</layout-section-container>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import LayoutSectionContainer from '@/components/layouts/public/home/SectionContainer.vue';
import LayoutSectionHeader from '@/components/layouts/public/home/SectionHeader.vue';
import Avatar from '@/components/pages/public/home/Avatar.vue';
import Icon from '@/shared/libs/icon/Icon.vue';
import BaseDivider from '@/components/bases/divider/Divider.vue';
import BaseTooltip from '@/components/bases/tooltip/Tooltip.vue';
import { I_ScreenSize } from '@/shared/interfaces';

const { t } = useI18n();

const screenSize = inject<I_ScreenSize>('screenSize', {} as I_ScreenSize);

const mailCopyTitle = ref(t('copy'));

const handleCopyMail = () => {
	navigator.clipboard.writeText('bhaktibuana19@gmail.com');
	mailCopyTitle.value = t('copied');
};

const handleBlurCopyMail = () => {
	setTimeout(() => {
		mailCopyTitle.value = t('copy');
	}, 500);
};
</script>

<style scoped lang="scss">
._home-about-container {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
}

._home-about-body {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 14px 20px;

	@include breakpoint(lg, min) {
		flex-direction: row;
	}
}

._home-about-content {
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	margin-top: 14px;

	@include breakpoint(sm, min) {
		width: 85%;
	}

	@include breakpoint(lg, min) {
		padding: 0 0 0 24px;
		margin-top: 0;
		width: 100%;
	}

	@include breakpoint(xl, min) {
		padding: 0;
	}

	& > span.title {
		color: var(--color-text-001);
		font-family: 'Poppins', sans-serif !important;
		font-size: 24px;
		font-weight: 600;
		line-height: 32px;
		margin-top: 16px;
	}

	& > span.subtitle {
		color: var(--color-text-002);
		font-family: 'Poppins', sans-serif !important;
		font-size: 14px;
		font-weight: 600;
		line-height: 22px;
	}

	& > span.description {
		color: var(--color-text-001);
		text-align: justify;
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		margin: 12px 0;

		@include breakpoint(lg, min) {
			max-width: 650px;
		}
	}

	& > .contact-wrapper {
		display: flex;
		flex-direction: row;
		gap: 8px;

		@include breakpoint(sm, max) {
			flex-direction: column;
			gap: 4px;
		}

		& > .contact-item-wrapper {
			display: flex;
			flex-direction: row;
			gap: 4px;
			align-items: center;

			& > .icon-wrapper {
				width: 18px;
				height: 18px;
				color: var(--color-text-002);
				display: flex;
				justify-content: center;
				align-items: center;
				border: 1.25px solid var(--color-text-002);
				border-radius: 100%;
			}

			& > a,
			span {
				text-decoration: none;
				color: var(--color-text-002);
				font-size: 14px;
				line-height: 22px;
				font-weight: 500;
				transition: 0.2s all ease;
				cursor: pointer;
				user-select: none;

				&:hover {
					color: var(--color-primary);
				}
			}
		}
	}
}
</style>
