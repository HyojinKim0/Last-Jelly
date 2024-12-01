using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class NewBehaviourScript : MonoBehaviour
{
    public Vector3[] pointlist;

    public RuntimeAnimatorController[] LevelAc;

    public void ChangeA(Animator anim, int level)
    {
        anim.RuntimeAnimatorController = LevelAc[level - 1];
    }
}
