'use strict'

import { AsyncStorage } from 'react-native';

const API_COVER_URL = "http://news-at.zhihu.com/api/4/start-image/1080*1776";
const API_LATEST_URL = 'http://news-at.zhihu.com/api/4/news/latest';
const API_HOME_URL = 'http://news.at.zhihu.com/api/4/news/before/';
const API_THEME_URL = 'http://news-at.zhihu.com/api/4/theme/';
const API_THEMES_URL = 'http://news-at.zhihu.com/api/4/themes';

const KEY_COVER = '@Cover';
const KEY_THEMES = '@Themes:';
const KEY_HOME_LIST = '@HomeList:';
const KEY_THEME_LIST = '@ThemeList:';
const KEY_THEME_TOPDATA = '@ThemeTop:';

function parseDateFormYYYYMMdd(str){
	if(!str) return new Date();
	return new Date(str.slice(0,4),str.slice(4,6),str.slice(6,8));
}

Date.prototype.YYYYMMdd = () =>{
	let YYYY = this.getFullYear().toString();
	let MM = (this.getMonth()+1).toString();
	let dd = this.getDate().toString();
	return YYYY + (MM[1]?MM:"0" + MM) + (dd[1]?dd:"0"+dd);
}

function DataRepository(){
	if(typeof DataRepository.instance === "Object"){
		return DataRepository;
	}

	DataRepository.instance = this;
}

DataRepository.prototype._safeStorage = function(key: string){
	return new Promise((resolve,reject) =>{
		AsyncStorage.getItem(key,(err,result) => {
			if(err){
				console.log(err)
				resolve(null);
			}else{
				let dataObj = JSON.parse(result);
				resolve(dataObj);
			}
		});
	});
}

DataRepository.prototype._safeFetch = function(url: string){
	console.log("URL:" + url);
	return new Promise((resolve,reject) = {
		fetch(url)
		.then((response) => response.json())
		.then((responseData) => {
			resolve(responseData)
		})
		.catch((err) =>{
			console.log(err);
			resolve(null);
		})
	})
}

DataRepository.prototype.getCover = function(){
  return this._safeStorage(KEY_COVER);
}

DataRepository.prototype.updateCover = function(){
  fetch(API_COVER_URL)
    .then((response) => response.json())
    .then((responseData) => {
      AsyncStorage.setItem(KEY_COVER, JSON.stringify(responseData));
    })
    .catch((error) => {
      console.error(error);
    })
    .done();
}

DataRepository.prototype.fetchStories = function(date?: Date,callback?: ?(error: ?Error, result: ?Object) => void){
	let reqUrl;
	let topData = null;
	if(!date){
		date = new Date();
		reqUrl = API_LATEST_URL;
		topData = this._safeStorage(KEY_THEME_TOPDATA + "0");
	}else{
		let beforeDate = new Date(date);
		beforeDate.setDate(date.getDate() + 1);
		reqUrl = API_HOME_URL + beforeDate.YYYYMMdd();
	}
}

export default DataRepository;