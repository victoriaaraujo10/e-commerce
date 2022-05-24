import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoriaProduto, Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  private produtos: Produto[] = [
    {
    imagem: 'https://x5music.vteximg.com.br/arquivos/ids/181039-1920-1920/FONE-DE-OUVIDO-EDIFIER-GAMER-G4-7.1-VERDE.jpg?v=636903544633030000g',
    nomeDoProduto: "HEADSET EDIFIER GAMER ",
    descricao: "O Exbom HF-G820 é um headphone projetado para jogos",
    preco: 80,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://a-static.mlcdn.com.br/1500x1500/pc-gamer-completo-a4-3-9ghz-8gb-fury-500gb-monitor-19-imperiums/lojaoficialimperiums/3827/4f93ca7f9ebe7c52870b45ca56b334a1.jpg',
    nomeDoProduto: "PC Gamer",
    descricao: "Pc Gamer Completo A4 3.9ghz / 8gb Fury / 500gb / Monitor 19 - Imperiums",
    preco: 3000,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/613bhsrtc4L._AC_SL1000_.jpg',
    nomeDoProduto: "Mouse Gamer",
    descricao: "Mouse Gamer Dpi 2400 Preto/Laranja Multilaser - MO270",
    preco: 40.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://images.tcdn.com.br/img/img_prod/740836/monitor_concordia_gamer_g5s_27_led_full_hd_165hz_freesync_hdmi_display_port_6685_1_aeda5ef11f5632bb477fa62b79a8f14d.jpg',
    nomeDoProduto: "Monitor 144hz",
    descricao: "Concórdia Gamer G5s 27 Led Full Hd 165hz Freesync Hdmi Display Port",
    preco: 800.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://a-static.mlcdn.com.br/618x463/teclado-gamer-semi-mecanico-x-zone-gts-01-usb-led-colorido-abnt2-pt-br-teclas-anti-ghosting-e-multimidia-xzone/viitstore/12515118603/3816e5c3f9b8022dde496f77a0ffc4e5.jpg',
    nomeDoProduto: "Teclado Gamer",
    descricao: "Teclado Gamer Semi Mecânico X-Zone Gts-01 USB, LED Colorido, ABNT2 PT-BR, Teclas Anti-Ghosting e Multimídia - Xzone",
    preco:196.5,
    emPromocao: true,
    quantidade: 0.1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'data:image/jpeg;base64,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',
    nomeDoProduto: "WebCam",
    descricao: "Câmera livre em disco usb da webcam do computador HD 2 006 k câmera câmera de vídeo conferência",
    preco: 100.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://s2.glbimg.com/B8iz-tT6WZuOdJmwkZsz2QfH978=/0x0:695x417/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/V/R/6B3apwSmSZOjswpftvtw/2017-04-10-imagem1-lenovo-y720.jpg',
    nomeDoProduto: "Notebook GAMER",
    descricao: "Legion Y720; modelo é focado em VR",
    preco: 10000.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_.jpg',
    nomeDoProduto: "Echo Dot",
    descricao: "Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta",
    preco: 500.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/71TfPNs4A2L._AC_SL1500_.jpg',
    nomeDoProduto: "Placa de video",
    descricao: "MSI GTX 1650 4GB GDDR6 Ventus XS OCV2 GPU Placa Gráfica",
    preco: 1700,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/51SLq9qMRkL._AC_.jpg',
    nomeDoProduto: "Pc Gamer Darius i5",
    descricao: " i5 3ºGer. GTX 1650 16Gb SSD 480Gb",
    preco: 5900,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'https://m.media-amazon.com/images/I/517+bsUHN+L._AC_.jpg',
    nomeDoProduto: "Pc Gamer Completo",
    descricao: "I5 8gb Hd 500gb Placa de Video Monitor",
    preco: 100.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },
  {
    imagem: 'data:image/jpeg;base64,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',
    nomeDoProduto: "WebCam",
    descricao: "Câmera livre em disco usb da webcam do computador HD 2 006 k câmera câmera de vídeo conferência",
    preco: 100.5,
    emPromocao: true,
    quantidade: 1,
    categoria: CategoriaProduto.ELETRO
  },



];

  getProdutos(){
    return this.produtos;
  //   return this.http.get("http://fakestoreapi.com/products").pipe(map((res:any)=>{
  //     return res;
  //   }))
  }
}