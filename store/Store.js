import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({ 
		data: null,
		video: {
			modal_active: false,
			url: null
		},
		image_header_url: null
  }),

  getters: {
		dataHeader: state => ({
			title: state.data?.acf.title,
			info_title: state.data?.acf.info_title,
			secondary_title: state.data?.acf.secondary_title,
			intro: state.data?.acf.intro,
			cta: state.data?.acf.cta,
			image_id: state.data?.acf.image,
			image_url: state.image_header_url
		}),

		dataList: state => ({
			list_header: state.data?.acf.list_header,
			list: state.data?.acf.list,
			images: state.data?.acf.images,
		}),

		dataVideos: state => ({
			urls: state.data?.acf.videos
		}),

		dataFooter: state => ({
			blocks: state.data?.acf.blocks,
			big_text: state.data?.acf.footer_big_text
		}),

		dataVideo: state => ({
			modal_active: state.video.modal_active,
			url: state.video.url
		})
  },

  actions: {
		setData(obj){
			this.data = obj
		},

		openModal(){ this.video.modal_active = true },
		closeModal(){ this.video.modal_active = false },

		setVideoURL(url){ this.video.url = url },

		setImageHeader(url){ this.image_header_url = url }
  },
})