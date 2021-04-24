import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {
  circle,
  latLng,
  LayerGroup,
  LeafletEvent,
  Map, MapOptions,
  Polygon,
  tileLayer
} from 'leaflet';

@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.scss']
})
export class MapDemoComponent implements OnInit, OnDestroy {
  @Output() map$: EventEmitter<Map> = new EventEmitter();
  @Output() zoom$: EventEmitter<number> = new EventEmitter();
  options: MapOptions= {
                      layers:[tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        opacity: 0.7,
                        maxZoom: 19,
                        detectRetina: true,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      })],
                      zoom: 12,
                      center:latLng(44.65738963437096,12.094805985689165)
  };
  layers = [
    circle([ 44.65738963437096, 12.094805985689165 ], { radius: 5000 }),
    // polygon(),
    // marker([ 44.65738963437096, 12.094805985689165 ])
  ];
  public map: Map;
  public zoom: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    try {
      this.map.clearAllEventListeners();
      this.map.remove();
    }
    catch(error){
      console.log('ngOnDestroy clearAllEventListeners catch error', error);
      return;
    }
  }

  onMapReady(map: Map) {
    this.map = map;
    this.map$.emit(map);
    this.zoom = map.getZoom();
    this.zoom$.emit(this.zoom);
  }

  onMapZoomEnd(e: LeafletEvent) {
    this.zoom = e.target.getZoom();
    this.zoom$.emit(this.zoom);
  }

  addPolygon(){
    const p = new Polygon(
      [
      [44.65738963437096, 12.094805985689165],
      [44.65406213459147, 12.096522599458694],
      [44.65577169961185, 12.102273255586624],
      [44.65894647236806, 12.100213319063188],
      [44.65738963437096, 12.094805985689165],
    ]
    );
    const l = new LayerGroup();
    p.addTo(l);
    l.addTo(this.map);
  }

}
