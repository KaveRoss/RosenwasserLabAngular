import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  constructor() {}

  json() {
    return [
      {
        title:
          'Mapping the diatom redox-sensitive proteome provides insight into response to nitrogen stress in the marine environment',
        writes:
          'Shilo Rosenwasser, Shiri Graff van Creveld, Daniella Schatz, Sergey Malitsky, Oren Tzfadia, Asaph Aharoni, Yishai Levin, Alexandra Gabashvili, Ester Feldmesser, and Assaf Vardi',
        image: 'one.png',
        journal: 'hi',
      },
      {
        title:
          'Rewiring Host Lipid Metabolism by Large Viruses Determines the Fate of Emiliania huxleyi, a Bloom-Forming Alga in the Ocean',
        writes:
          'Shilo Rosenwasser, Michaela A. Mausz, Daniella Schatz, Uri Sheyn, Sergey Malitsky, Asaph Aharoni, Eyal Weinstock, Oren Tzfadia, Shifra Ben-Dor, Ester Feldmesser, Georg Pohnert, Assaf Vardi',
        image: 'two.png',
      },
      {
        title:
          'Open Access Organelles Contribute Differentially to Reactive Oxygen Species-Related Events during Extended Darkness',
        writes:
          'Shilo Rosenwasser, Ilona Rot, Evelyn Sollner, Andreas J. Meyer, Yoav Smith, Noam Leviatan, Robert Fluhr, Haya Friedman',
        image: 'there.png',
      },
      {
        title:
          'Virocell Metabolism: Metabolic Innovations During Host–Virus Interactions in the Ocean',
        writes:
          'Shilo Rosenwasser Carmit Ziv Shiri Graff van Creveld Assaf Vardi',
        image: '',
      },
      {
        title:
          'Virocell Metabolism: Metabolic Innovations During Host–Virus Interactions in the Ocean',
        writes:
          'Shilo Rosenwasser Carmit Ziv Shiri Graff van Creveld Assaf Vardi',
        image: '',
      },
    ];
  }
}
